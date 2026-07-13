# Eric Ardiansyah — Personal Website

A static personal website: home, about, projects, experience, education,
skills, blog, and contact. Vanilla HTML, CSS, and JS — no build step,
no frameworks, no dependencies beyond a Google Fonts stylesheet.

```
/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    └── README.md   (what to put in this folder)
```

## Deploying to GitHub Pages

1. **Create a repository.**
   - If this will be your primary site (served at `https://<username>.github.io`),
     name the repo exactly `<username>.github.io`.
   - Otherwise, any repo name works and the site will be served at
     `https://<username>.github.io/<repo-name>/`.

2. **Push these files to the repo's default branch** (usually `main`):
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```

3. **Enable Pages.**
   In the repo: **Settings → Pages → Build and deployment → Source**,
   select **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.

4. **Wait a minute, then visit the URL** GitHub shows on that same Pages
   settings screen.

5. **If you used a custom domain name** (e.g. `ericardiansyah.dev`), add a
   `CNAME` file to the repo root containing just that domain, and point your
   DNS `A`/`CNAME` records at GitHub Pages per
   [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Before your first deploy, replace these placeholders

- `index.html` — canonical URL, Open Graph URL, JSON-LD `url`, and the
  GitHub/LinkedIn/email links in **Contact** currently point to placeholders.
- `assets/favicon.png` and `assets/og-image.png` — referenced but not
  included; see `assets/README.md`.
- `assets/resume-placeholder.pdf` — the **Download résumé** button links here.
- `sitemap.xml` — update the domain to match your actual GitHub Pages URL.
- Experience section — the timeline currently holds three empty entries.

## Extending the site

The site was built so each content type is a single repeatable block:

- **New project** → duplicate one `<article class="project-card">` block
  inside `#projects` in `index.html`.
- **New experience entry** → duplicate one `<li class="timeline-item">`
  block inside `#experience`.
- **New blog post** → duplicate one `<li class="blog-item">` block inside
  `#blog`. For a real post, either link out to a written page (e.g. a
  Markdown file rendered separately) or add a `/blog/post-slug.html` page
  using the same header/footer markup as `index.html`.

No CSS or JS changes are needed for any of the above — the existing classes
handle layout automatically.

## Design notes

- **Typography:** IBM Plex Sans for body text, IBM Plex Mono for labels,
  navigation, tags, and the `// 01 about`-style section markers. The mono
  labels are the site's one deliberate signature — section headers read like
  code comments, which fits the "engineering notebook" framing without
  adding any visual noise.
- **Color:** near-monochrome (`#ffffff` / `#111111` / `#666666`) with a
  single accent (`#0A66C2`) used only for links, active nav state, and
  primary actions — never for decoration.
- **No JS frameworks, no icon fonts, no animation libraries.** The only
  script on the page handles the mobile nav toggle, scroll-spy active-link
  highlighting, and the footer year.

## Suggestions for future improvements

- **Real content for Experience.** The timeline is currently three
  placeholder entries — swap in actual roles/organizations.
- **A real blog.** Right now posts are placeholders with no destination.
  The simplest path on GitHub Pages: write each post as its own
  `blog/slug.html` using the same nav/footer, or adopt Jekyll (which GitHub
  Pages supports natively) once there are enough posts to want templating.
- **Dark mode.** The token system in `:root` makes this close to a
  `prefers-color-scheme` media query away — swap `--color-bg`/`--color-text`
  values in a `@media (prefers-color-scheme: dark)` block.
- **Project detail pages.** "Read more" currently links to `#`. Consider a
  `projects/slug.html` per project once there's enough to say about each one.
- **Lighthouse pass once real assets are added** — confirm the favicon,
  OG image, and résumé don't regress load time or accessibility score.
- **Analytics**, if wanted, should be a single lightweight, privacy-respecting
  script (e.g. Plausible or GoatCounter) rather than anything heavier.
