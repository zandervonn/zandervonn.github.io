(() => {
    const sky = document.createElement('div');
    sky.className = 'starfield';
    sky.setAttribute('aria-hidden', 'true');

    // Stable, scattered positions keep the same quiet sky across page loads.
    let seed = 648450;
    const random = () => {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return seed / 4294967296;
    };

    const stars = document.createDocumentFragment();
    for (let index = 0; index < 120; index += 1) {
        const star = document.createElement('span');
        star.className = index % 5 === 0 ? 'star star-twinkle' : 'star';
        star.style.left = `${(random() * 100).toFixed(2)}%`;
        star.style.top = `${(random() * 100).toFixed(2)}%`;
        star.style.setProperty('--size', `${(0.8 + random() * 1.2).toFixed(2)}px`);
        star.style.setProperty('--brightness', (0.16 + random() * 0.32).toFixed(2));
        star.style.setProperty('--duration', `${(6 + random() * 7).toFixed(2)}s`);
        star.style.setProperty('--delay', `${(-random() * 13).toFixed(2)}s`);
        stars.append(star);
    }

    sky.append(stars);
    document.body.prepend(sky);

    const syncVisibility = () => {
        sky.classList.toggle('is-paused', document.hidden);
    };
    document.addEventListener('visibilitychange', syncVisibility);
    syncVisibility();
})();
