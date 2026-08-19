# Project Structure Documentation

This document provides a comprehensive guide to the directory organization, component architecture, layout system, modular SCSS asset pipeline, and git lint conventions for this Jekyll website.

---

## 📂 Directory Tree Overview

```text
blog/
├── .github/
│   └── workflows/
│       ├── commitlint.yml      # CI workflow for commit message validation
│       └── deploy.yml          # GitHub Actions automated build & deployment workflow
├── .githooks/
│   └── commit-msg              # Local Git hook for Conventional Commit enforcement
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
├── COMMIT_CONVENTIONS.md       # Conventional Commits specification & linting guide
├── commitlint.config.js        # Commitlint rules configuration
├── Gemfile                     # Ruby dependencies declaration
├── Gemfile.lock                # Locked dependency versions
├── index.html                  # Root homepage entry point (uses home layout)
├── PROJECT_STRUCTURE.md        # Comprehensive structure documentation
├── projects.md                 # Featured Projects portfolio page (/projects/)
└── README.md                   # Quick start and GitHub deployment guide
```

---

## 🛠 Detailed Component Breakdown

### 1. Configuration & CI/CD Pipeline

| File | Description | Key Settings / Notes |
| :--- | :--- | :--- |
| [`_config.yml`](file:///D:/cv/blog/_config.yml) | Global Jekyll configuration | Configures `title`, `author`, `email`, `baseurl: "/blog"`, `google_analytics`, Markdown parser (`kramdown`), syntax highlighter (`rouge`), and default layout rules. |
| [`.github/workflows/deploy.yml`](file:///D:/cv/blog/.github/workflows/deploy.yml) | CI/CD Pages Pipeline | Automates building Jekyll with `bundle exec jekyll build` and deploying static outputs to GitHub Pages upon pushing to `main`. |
| [`.github/workflows/commitlint.yml`](file:///D:/cv/blog/.github/workflows/commitlint.yml) | Commit Message Linter | Validates all incoming commit messages against Conventional Commit rules in PRs and pushes. |
| [`commitlint.config.js`](file:///D:/cv/blog/commitlint.config.js) | Linter Rules | Enforces type declarations (`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `build`, `ci`, etc.). |
| [`COMMIT_CONVENTIONS.md`](file:///D:/cv/blog/COMMIT_CONVENTIONS.md) | Conventions Reference | Complete guide on commit message types, scopes, and local git hooks. |

---

## 🎨 Modular SCSS Pipeline (`_sass/` & `assets/css/style.scss`)

The styling architecture is modular **SCSS** using Dart Sass `@use` syntax:

- **[`_sass/_variables.scss`](file:///D:/cv/blog/_sass/_variables.scss)**: Stores design tokens (colors `$primary: #00f2fe`, `$bg-dark: #07090e`), glassmorphism mixins (`@mixin glass-panel`), radii, and animation cubic beziers.
- **[`_sass/_base.scss`](file:///D:/cv/blog/_sass/_base.scss)**: Configures global CSS resets, typography rules (`Outfit` & `Inter`), link hover glows, and fixed radial ambient background light sources.
- **[`_sass/_components.scss`](file:///D:/cv/blog/_sass/_components.scss)**: Component-level SCSS rules for `.navbar`, `.btn`, `.badge`, `.post-card`, and `.footer`.
- **[`_sass/_layouts.scss`](file:///D:/cv/blog/_layouts.scss)**: Layout-specific styles for `.hero-card`, `.article-container`, `.article-body`, `<pre>` code blocks, and responsive `@media (max-width: 768px)` queries.
- **[`assets/css/style.scss`](file:///D:/cv/blog/assets/css/style.scss)**: Main entry SCSS file with Jekyll Front Matter headers (`---`) that aggregates all partials via `@use`. During build, Jekyll automatically compiles this into `_site/assets/css/style.css`.
