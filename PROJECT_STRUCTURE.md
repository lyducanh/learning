# Project Structure Documentation

This document provides a comprehensive guide to the directory organization, component architecture, layout system, and modular SCSS asset pipeline for this Jekyll website.

---

## 📂 Directory Tree Overview

```text
blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated build & deployment workflow
├── _includes/                  # Reusable Liquid template components
│   ├── footer.html             # Site footer with social links & copyright info
│   ├── head.html               # HTML <head> with SEO tags, GA4 tracking & asset links
│   └── header.html             # Sticky glassmorphic navigation header
├── _layouts/                   # Jekyll page & post layouts
│   ├── default.html            # Core HTML shell (includes head, header, main, footer)
│   ├── home.html               # Landing page layout (hero section + post grid)
│   ├── page.html               # Standard content page layout (About, Projects)
│   └── post.html               # Blog article detail layout (read time, metadata, body)
├── _posts/                     # Blog post Markdown content (YYYY-MM-DD-title.md)
│   ├── 2026-07-20-future-of-web-architecture-2026.md
│   ├── 2026-08-01-mastering-jekyll-and-github-pages.md
│   └── 2026-08-15-building-scalable-ai-agents.md
├── _sass/                      # Modular SCSS stylesheets & mixins
│   ├── _base.scss              # Global resets, typography, background light glows
│   ├── _components.scss        # Navbar, buttons, badges, post cards, footer
│   ├── _layouts.scss           # Main container, hero section, article view, media queries
│   └── _variables.scss         # Design tokens (colors, mixins, glass tokens, fonts)
├── assets/                     # Static website assets
│   ├── css/
│   │   └── style.scss          # Primary SCSS entry stylesheet (compiled by Jekyll)
│   ├── images/
│   │   ├── avatar.jpg          # Profile avatar image
│   │   └── hero.jpg            # Hero banner background graphic
│   └── js/
│       └── main.js             # Interactive scripts (copy code button, read time)
├── .gitignore                  # Git ignore rules for Jekyll build outputs & caches
├── _config.yml                 # Jekyll global configuration & GA4 analytics ID
├── about.md                    # About Me page content (/about/)
├── ANALYTICS_SETUP.md          # Step-by-step Google Analytics 4 configuration guide
├── Gemfile                     # Ruby dependencies declaration
├── Gemfile.lock                # Locked dependency versions
├── index.html                  # Root homepage entry point (uses home layout)
├── PROJECT_STRUCTURE.md        # Comprehensive structure documentation
├── projects.md                 # Featured Projects portfolio page (/projects/)
└── README.md                   # Quick start and GitHub deployment guide
```

---

## 🎨 Modular SCSS Pipeline (`_sass/` & `assets/css/style.scss`)

The styling architecture has been converted to modular **SCSS** using Dart Sass `@use` syntax:

- **[`_sass/_variables.scss`](file:///D:/cv/blog/_sass/_variables.scss)**: Stores design tokens (colors `$primary: #00f2fe`, `$bg-dark: #07090e`), glassmorphism mixins (`@mixin glass-panel`), radii, and animation cubic beziers.
- **[`_sass/_base.scss`](file:///D:/cv/blog/_sass/_base.scss)**: Configures global CSS resets, typography rules (`Outfit` & `Inter`), link hover glows, and fixed radial ambient background light sources.
- **[`_sass/_components.scss`](file:///D:/cv/blog/_sass/_components.scss)**: Component-level SCSS rules for `.navbar`, `.btn`, `.badge`, `.post-card`, and `.footer`.
- **[`_sass/_layouts.scss`](file:///D:/cv/blog/_layouts.scss)**: Layout-specific styles for `.hero-card`, `.article-container`, `.article-body`, `<pre>` code blocks, and responsive `@media (max-width: 768px)` queries.
- **[`assets/css/style.scss`](file:///D:/cv/blog/assets/css/style.scss)**: Main entry SCSS file with Jekyll Front Matter headers (`---`) that aggregates all partials via `@use`. During build, Jekyll automatically compiles this into `_site/assets/css/style.css`.
