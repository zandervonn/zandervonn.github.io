(() => {
    const video = document.querySelector('#gameplay-video');
    const toggle = document.querySelector('.video-toggle');
    if (!video || !toggle) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    let userPaused = false;
    let userStarted = false;

    video.controls = false;
    video.muted = true;
    toggle.hidden = false;

    const updateLabel = () => {
        toggle.textContent = video.paused ? 'Play gameplay' : 'Pause gameplay';
    };

    const updatePlayback = () => {
        const shouldPlay = inView && !document.hidden && !userPaused
            && (!reducedMotion.matches || userStarted);
        if (shouldPlay) {
            video.play().catch(updateLabel);
        } else {
            video.pause();
        }
    };

    toggle.addEventListener('click', () => {
        if (video.paused) {
            userPaused = false;
            userStarted = true;
            video.play().catch(updateLabel);
        } else {
            userPaused = true;
            video.pause();
        }
    });

    video.addEventListener('play', updateLabel);
    video.addEventListener('pause', updateLabel);
    document.addEventListener('visibilitychange', updatePlayback);
    reducedMotion.addEventListener('change', () => {
        userStarted = false;
        updatePlayback();
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting && entry.intersectionRatio >= 0.3;
            updatePlayback();
        }, { threshold: [0, 0.3] });
        observer.observe(video);
    }

    const showcase = document.querySelector('.gameplay-showcase');
    const track = document.querySelector('.video-track');
    const preview = document.querySelector('.gameplay-preview');
    const stage = document.querySelector('.orbit-stage');
    const orbit = document.querySelector('.orbit-path');
    const route = document.querySelector('.orbit-route');
    const reveal = document.querySelector('.orbit-reveal');
    const mask = document.querySelector('#orbit-reveal-mask');
    const sun = document.querySelector('.orbit-sun');
    if (!showcase || !track || !preview || !stage || !orbit || !route || !reveal || !mask) return;

    // Fit the same ordered, looping route to the actual planet centres at each size.
    const rebuildRoute = () => {
        const bounds = stage.getBoundingClientRect();
        if (sun) sun.style.left = `${document.documentElement.clientWidth / 2 - bounds.left}px`;
        const points = [...stage.querySelectorAll('.planet')].map(planet => {
            const rect = planet.getBoundingClientRect();
            return { x: rect.left + rect.width / 2 - bounds.left,
                y: rect.top + rect.height / 2 - bounds.top };
        });
        let d = `M ${points[0].x} ${points[0].y}`;
        for (let index = 1; index < points.length; index += 1) {
            const from = points[index - 1];
            const to = points[index];
            const bend = (to.y - from.y) * 0.65;
            if (index === 2 || index === 6) {
                const x = (from.x + to.x) / 2;
                const y = (from.y + to.y) / 2;
                const r = Math.min(38, bounds.width * 0.1);
                d += ` C ${from.x} ${from.y + bend} ${x + r} ${y - r} ${x} ${y}`;
                d += ` C ${x - r * 2} ${y + r * 2} ${x - r * 2} ${y - r * 2} ${x} ${y}`;
                d += ` C ${x + r} ${y + r} ${to.x} ${to.y - bend} ${to.x} ${to.y}`;
            } else {
                d += ` C ${from.x} ${from.y + bend} ${to.x} ${to.y - bend} ${to.x} ${to.y}`;
            }
        }
        orbit.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
        const left = Math.min(0, ...points.map(point => point.x)) - 100;
        mask.setAttribute('x', left);
        mask.setAttribute('y', -10);
        mask.setAttribute('width', bounds.width - left + 100);
        mask.setAttribute('height', bounds.height + 20);
        route.setAttribute('d', d);
        reveal.setAttribute('d', d);
    };

    // Video moves at 20% of page speed, staying with the finale; planets at 120%.
    let framePending = false;
    let currentPlanetShift = 0;
    const updateScroll = () => {
        framePending = false;
        const sectionTop = showcase.getBoundingClientRect().top + window.scrollY;
        const start = Math.max(0, sectionTop - window.innerHeight * 0.65);
        const travel = Math.max(0, window.scrollY - start);
        const available = Math.max(0, track.clientHeight - preview.offsetHeight);
        const shift = reducedMotion.matches ? 0
            : Math.min(available, travel * 0.8);
        const planetShift = reducedMotion.matches ? 0
            : -Math.min(stage.clientHeight * 0.22, travel * 0.2);
        const stageTop = stage.getBoundingClientRect().top - currentPlanetShift + planetShift;
        const routeEnd = sun ? sun.offsetTop : stage.clientHeight;
        const progress = reducedMotion.matches ? 1
            : Math.max(0, Math.min(1, (window.innerHeight * 0.8 - stageTop) / routeEnd));
        const sunTop = stageTop + routeEnd;
        const smooth = value => {
            const t = Math.max(0, Math.min(1, value));
            return t * t * (3 - 2 * t);
        };
        // The horizon only emerges with the end of the chain, then dissolves away.
        const appear = reducedMotion.matches ? 1
            : smooth((window.innerHeight * 0.95 - sunTop) / (window.innerHeight * 0.35));
        const disappear = reducedMotion.matches ? 0
            : smooth((window.innerHeight * 0.32 - sunTop) / (window.innerHeight * 0.42));
        const sunOpacity = appear * (1 - disappear);
        preview.style.setProperty('--video-shift', `${shift.toFixed(1)}px`);
        stage.style.setProperty('--planet-shift', `${planetShift.toFixed(1)}px`);
        reveal.style.strokeDashoffset = (1 - progress).toFixed(4);
        showcase.style.setProperty('--sun-top', `${sunTop - showcase.getBoundingClientRect().top}px`);
        showcase.style.setProperty('--sun-opacity', sunOpacity.toFixed(4));
        route.style.opacity = (1 - disappear).toFixed(4);
        currentPlanetShift = planetShift;
    };
    const scheduleScroll = () => {
        if (!framePending) {
            framePending = true;
            window.requestAnimationFrame(updateScroll);
        }
    };
    window.addEventListener('scroll', scheduleScroll, { passive: true });
    const updateLayout = () => {
        rebuildRoute();
        scheduleScroll();
    };
    window.addEventListener('resize', updateLayout);
    reducedMotion.addEventListener('change', scheduleScroll);
    if ('ResizeObserver' in window) {
        const resizeObserver = new ResizeObserver(updateLayout);
        resizeObserver.observe(track);
        resizeObserver.observe(preview);
        resizeObserver.observe(stage);
    }
    rebuildRoute();
    updateScroll();
})();
