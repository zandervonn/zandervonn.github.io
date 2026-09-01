# The non-generic Codex website redesign playbook

Use this when a website is technically polished but still feels generated, interchangeable, or “vibe-coded.”

The aim is not novelty for its own sake. The aim is a design whose structure, materials, language, and emphasis could only plausibly belong to its subject.

## One-step master prompt

Copy this entire prompt into Codex and fill in the short context block.

```text
Redesign the website in [PROJECT OR REPOSITORY] and take the work through implementation and visual QA in this task.

Context
- Subject: [WHAT THE PRODUCT, PERSON, PLACE, OR ORGANISATION ACTUALLY IS]
- Audience: [WHO THE PAGE IS FOR]
- The page’s single job: [THE ONE THING A VISITOR SHOULD UNDERSTAND OR DO]
- Desired feeling: [THREE TO FIVE PRECISE WORDS]
- Keep: [FUNCTIONALITY, LINKS, CONTENT, ROUTES, OR ASSETS THAT MUST SURVIVE]
- Avoid: [KNOWN VISUAL OR VERBAL DIRECTIONS I DISLIKE]
- Publish after validation: [YES OR NO]

This is a structural redesign, not a polish pass. Do not preserve a generic landing-page composition merely because it is competent. You may rewrite the copy, remove sections, simplify functionality, and replace the visual hierarchy when that creates a more specific and coherent result.

Start by inspecting the current site, its real content, and its first-party assets. Identify the elements that make the existing version feel templated. Look for repeated AI landing-page grammar: an eyebrow over an oversized hero, a second hero line in an accent colour, two pill CTAs, a three-card or 01/02/03 explainer, rounded feature panels, dashboard theatre, fake metrics, glowing gradients, device mockups, screenshot carousels, decorative labels, and generic startup copy. Treat these as suspected defaults, not as components that must be restyled.

Before writing code, define:
1. The concrete subject, audience, and single job.
2. A compact palette of four to six named colours with hex values, derived from the subject rather than a trend.
3. Deliberate type roles for heading, body, and utility text.
4. A layout concept in one sentence and a small ASCII wireframe.
5. One signature element grounded in the subject.
6. One real aesthetic risk worth taking.

Critique that plan before building. Ask whether the same plan could be reused almost unchanged for a SaaS product, portfolio, restaurant, AI tool, or mobile app. If it could, revise it. Also reject the current common defaults unless the subject truly calls for them: warm cream plus display serif plus terracotta; near-black plus one acid accent; or dense broadsheet/editorial grids.

Implementation rules
- Let one idea carry the identity. Keep everything around it quiet.
- Use structure only when it communicates real information. Do not add numbering, labels, dividers, cards, or metrics as decoration.
- Do not force a “signature interaction.” Use motion or interaction only when it helps someone understand or use the subject.
- Prefer real first-party materials over generated filler. If the available screenshots or imagery are poor, omit them or use a restrained crop/material detail instead of building the page around them.
- Write from the visitor’s side of the screen. Use plain, specific language and active verbs. Remove phrases such as “elevate your experience,” “unlock,” “next level,” “seamless,” “built for,” and other copy that could describe anything.
- Do not use size, all-caps, tracking, or accent colour as a substitute for an idea.
- A minimal direction requires precise spacing and hierarchy, not empty decoration.
- Preserve required links, forms, accessibility, SEO metadata, legal routes, and existing behaviour.
- Keep visible keyboard focus. Respect reduced-motion preferences when motion exists.

Default slop filter
Do not use any of these unless the content supplies a concrete reason:
- BIG SLOGAN / BIG SLOGAN IN ANOTHER COLOUR
- tiny tracked eyebrow / enormous headline / generic lede
- primary pill CTA beside secondary pill CTA
- three equal feature cards
- 01 / 02 / 03 as decorative structure
- glass panels, blobs, auroras, neon glows, or gradient text
- fake terminals, control panels, system labels, or technical readouts
- a phone frame or screenshot presented as proof of a design idea
- staggered cards and scroll reveals added only to make the page feel “premium”
- generic icon-and-copy feature grids
- a final oversized CTA banner that repeats the hero
- rounded rectangles around content that does not need containment

These are not universal bans. If one is genuinely the clearest expression of the subject, explain why before using it. Convenience is not a reason.

Build the redesign fully. Then inspect the real page in a browser at desktop and mobile widths. Check every important route, real asset, form, external link, overflow condition, keyboard state, and browser warning. Do not judge from source code alone.

Run one deliberate self-critique after rendering:
- What still looks like an AI default?
- Which element is decorating rather than communicating?
- Is the headline relying on scale or colour to create interest?
- Is any repeated section present because landing pages usually have it?
- Would removing one accessory make the page stronger?

Make one focused revision based on that evidence. Repeat QA after the change.

Finish with:
- the implemented result, not a proposal;
- a short explanation of the subject-specific design idea;
- the routes and viewport sizes tested;
- any honest residual weakness;
- publication only if “Publish after validation” is YES.

Do not stop for routine aesthetic choices. Make informed decisions from the subject and continue until the implemented site passes the visual and functional checks.
```

## Fast slop detector

Use this when reviewing any generated site.

### Composition

- Could the section order be copied into almost any landing page?
- Is the hero doing all its work through font size?
- Are there three equal columns because three columns are easy?
- Do cards contain content that could simply sit on the page?
- Is there a second “big CTA” repeating the first?

### Typography and colour

- Is a second headline line coloured only to create drama?
- Are all-caps, tracking, gradients, or condensed display type doing decorative work?
- Does the palette come from the subject, or from a current design trend?
- Are more than one or two devices competing for attention?

### Components and motion

- Are pills, badges, metrics, dashboards, or console labels pretending the product is more technical?
- Is interaction present because the builder wanted a signature moment?
- Would the site remain just as understandable without the animation?
- Are screenshots compensating for the absence of an actual visual idea?

### Copy

- Could the headline belong to another product?
- Does the page describe what the visitor controls and recognises?
- Are claims specific enough to be disproved?
- Can any paragraph be deleted without losing information?

## Acceptance gate

A redesign is not finished until all of these are true:

- The subject, audience, and page job are obvious without reading implementation notes.
- The visual idea would be difficult to reuse for an unrelated website.
- At least one conventional landing-page section was challenged rather than automatically preserved.
- The page has one dominant idea, not five competing effects.
- Copy contains no generic marketing filler.
- Desktop and mobile were inspected as rendered pages.
- Important linked routes retain the same visual logic.
- Required forms and links still work.
- No horizontal overflow, missing assets, or browser warnings remain.
- One unnecessary accessory was removed after the first render.

## Cosmic Clash reference

The accepted Cosmic Clash direction is a useful example of the method, not a universal template.

- Subject: a small physics game about releasing planets into a crowded orbit.
- Job: explain the rule and let visitors download or request Android access.
- Palette: stone, soil, chalk, moss, oxidised iron.
- Type: quiet sans-serif structure with restrained book-style body copy.
- Signature: small real planet-surface materials arranged around a broken orbital line.
- Risk: remove almost all standard sales-page machinery.
- Copy principle: explain release, gravity, matching, and the changed board; do not sell an “epic cosmic experience.”

Rejected in this project:

- gameplay screenshots as the hero;
- giant split-colour slogans;
- numbered explainers;
- faux consoles and readouts;
- arcade labels;
- pills, cards, badges, glow, and decorative metrics;
- interaction added to prove the page was custom;
- clever legal-page headlines.

The final page succeeds because the composition, copy, material, and restraint all express the same small game.
