
# Software Engineer Portfolio — Bold Editorial

A high-impact portfolio with magazine-style typography, rich scroll-driven animations, a WebGL hero accent, and dedicated case-study pages that explain each project in depth.

## Visual Direction

- **Style**: Bold editorial — oversized display headlines, mixed serif (display) + sans (body), asymmetric grids, generous whitespace, strong rules and numbered section markers.
- **Palette**: Off-white paper (#F5F2EC) base, ink black (#0A0A0A) text, a single accent (deep crimson or electric cobalt — picked at build).
- **Typography**: Display serif (e.g. Fraunces / Instrument Serif) for headlines; clean sans (Inter) for body; mono for metadata and code.
- **Motion**: Layered — subtle entrance fades + scroll-driven reveals + parallax + custom cursor + a WebGL hero accent. Respects `prefers-reduced-motion`.

## Site Structure (separate routes)

```text
/               Home — hero, featured projects, snapshot of about
/about          Story, philosophy, skills matrix
/work           Project index (grid of all case studies)
/work/$slug     Detailed case study (one per project)
/experience     Interactive timeline (work + education)
/writing        Blog index
/writing/$slug  Article page
/contact        Contact form + links
```

Each route gets its own SEO metadata (title, description, og tags).

## Page-by-Page

### Home (`/`)
- **Hero**: Full-viewport. Massive serif name, role tagline. WebGL accent (subtle animated mesh/noise gradient or particle field) behind text. Custom cursor active. Scroll indicator.
- **Marquee strip**: Tech stack scrolling horizontally.
- **Featured Work**: 3 hero projects with large imagery, parallax on scroll, hover-reveal details.
- **About snapshot**: Short intro + portrait, link to full About.
- **Closing CTA**: Big editorial "Let's build something" → contact.

### About (`/about`)
- Long-form intro with pull quotes and drop caps.
- Skills matrix grouped (Languages, Frameworks, Infra, Tools) with proficiency bars that animate in.
- "Currently" panel: what I'm learning, listening to, reading.
- Downloadable resume button.

### Work index (`/work`)
- Editorial grid (asymmetric, varying card sizes). Each card: cover image, project name, year, role, tags. Hover scales + reveals accent.
- Filter chips by tag (Frontend, Backend, AI, Mobile, etc.).

### Case Study (`/work/$slug`)
Each project gets a fully structured page that explains everything you did:
1. **Cover** — big title, one-line summary, role, timeline, stack chips, live/repo links.
2. **Context & Problem** — what existed, who it's for, why it mattered.
3. **Goals & Constraints** — measurable objectives.
4. **Approach** — architecture diagram, key decisions with rationale.
5. **Build highlights** — code snippets (syntax highlighted), screenshots/video with parallax.
6. **Challenges & trade-offs** — honest engineering reflections.
7. **Outcome & metrics** — numbers, animated counters.
8. **What I learned** — short reflection.
9. **Next/prev project** navigation.

### Experience (`/experience`)
- Vertical timeline alternating left/right with sticky year markers.
- Items reveal as they enter viewport. Each entry: company/school, role, dates, bullets, tech tags.
- Toggle: Work | Education | All.

### Writing (`/writing`, `/writing/$slug`)
- Index: list of articles with date, reading time, excerpt.
- Article page: editorial typography, table of contents (sticky), code blocks, footnotes.

### Contact (`/contact`)
- Big editorial headline, intro paragraph.
- Form: name, email, subject, message → stored in Lovable Cloud + email notification.
- Direct links: email, GitHub, LinkedIn, X.

## Animation System

- **Entrance**: Fade + slide reveals on scroll (IntersectionObserver based).
- **Scroll-driven**: Parallax layers on hero and case study covers; pinned sections that progress as you scroll.
- **Custom cursor**: Subtle dot + trailing ring; grows on interactive elements; disabled on touch.
- **Hover**: Magnetic buttons, image zoom, link underline reveal.
- **Page transitions**: Soft cross-fade between routes.
- **WebGL hero**: Lightweight shader gradient/noise — only loads on capable devices, falls back to CSS gradient.
- **Reduced motion**: All animations downgrade to instant fades.

## Data & Content

- Projects, experience entries, and articles defined as typed content files (easy for you to edit). No CMS dashboard for v1 — you'll share project details and I'll wire them in.
- Contact form submissions stored in Lovable Cloud (a `messages` table) so nothing is lost if email fails.

## Performance & Quality

- Images responsive + lazy-loaded.
- WebGL and custom cursor only on devices that can handle them.
- SEO metadata per route, sitemap-ready structure.
- Accessible: keyboard nav, focus rings preserved, semantic landmarks, contrast checked.

## Build Order

1. Design tokens (colors, fonts, spacing) + base layout shell with header/footer + custom cursor + page transitions.
2. Home page with hero (WebGL accent), marquee, featured work, snapshot, CTA.
3. Work index + case study template with all sections and animations.
4. About page with skills matrix.
5. Experience timeline.
6. Writing index + article template.
7. Contact form wired to Lovable Cloud.
8. Polish pass: reduced-motion fallbacks, mobile tuning, SEO metadata per route.

After approval, I'll build with placeholder copy and a couple of sample case studies so you can see the structure live, then swap in your real content when you share it.
