# Git Commit & Lint Conventions

This repository follows the **[Conventional Commits specification](https://www.conventionalcommits.org/)**. Standardized commit messages keep git history readable, automate changelog generation, and ensure CI/CD quality.

---

## 📌 Commit Message Format

Each commit message consists of a **type**, an optional **scope**, and a **description**:

```text
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

---

## 🏷️ Allowed Commit Types

| Type | Emoji | Description | Example |
| :--- | :---: | :--- | :--- |
| `feat` | ✨ | A new feature or user-facing capability | `feat(hero): add dynamic avatar glow animation` |
| `fix` | 🐛 | A bug fix or patch | `fix(layout): fix responsive navbar overlap on mobile` |
| `docs` | 📝 | Documentation additions or updates | `docs(readme): update deployment instructions` |
| `style` | 💄 | Code formatting, SCSS styling, whitespace | `style(scss): convert CSS variables to SCSS mixins` |
| `refactor` | ♻️ | Code restructuring with no logic or feature changes | `refactor(includes): extract head metadata into partial` |
| `perf` | ⚡ | Performance optimization | `perf(images): compress hero background asset` |
| `test` | 🧪 | Adding or correcting automated tests | `test(build): add local HTML validation script` |
| `build` | 📦 | Build system, Gemfile, or dependency changes | `build(gems): update jekyll-seo-tag dependency` |
| `ci` | 👷 | GitHub Actions workflows or deployment configs | `ci(pages): update GitHub Pages deployment action` |
| `chore` | 🔧 | Maintenance, repository cleanup, `.gitignore` | `chore(git): update gitignore for temp files` |
| `revert` | ⏪ | Reverting a previous commit | `revert: revert feat(hero) change` |

---

## 🎯 Common Scopes (Optional)

You may include a scope in parentheses to specify the section being modified:

- `(blog)`: Posts or layout for posts
- `(hero)`: Hero section & avatar
- `(nav)`: Navigation bar & header
- `(scss)`: Styling partials or design tokens
- `(analytics)`: GA4 tracking setup
- `(ci)`: Actions & workflows

---

## ⚙️ Local Git Hook Setup

To enable commit message validation locally before every `git commit`, run:

```bash
git config core.hooksPath .githooks
```

Now, Git will automatically run `.githooks/commit-msg` to check your message syntax before allowing the commit!
