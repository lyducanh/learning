# Ly Duc Anh - Developer Portfolio & Tech Blog

A modern, high-performance **Jekyll** blog & portfolio site designed with a **Dark Glassmorphism** visual theme and automated deployment via **GitHub Actions**.

![Hero Banner](assets/images/hero.jpg)

## ✨ Features

- **Dark Glassmorphic UI**: Vibrant gradient glows, glass backdrop blur, and modern typography (`Outfit` + `Inter`).
- **Interactive Blog & Projects**: Features blog posts with estimated read times, tag badges, and copyable code blocks.
- **SEO Optimized**: Pre-configured with `jekyll-seo-tag`, `jekyll-feed`, `jekyll-sitemap`, and OpenGraph metadata.
- **Automated Deployment**: Pre-built `.github/workflows/deploy.yml` pipeline to automatically build and host on **GitHub Pages**.

---

## 🚀 Local Development

### 1. Requirements
- Ruby 3.x+
- Bundler (`gem install bundler`)

### 2. Install Dependencies
```bash
bundle install
```

### 3. Run Local Server
```bash
bundle exec jekyll serve
```
Open your browser at `http://localhost:4000/blog` (or `http://localhost:4000/` depending on `baseurl`).

---

## 📤 Push to GitHub & Deploy to GitHub Pages

Follow these simple steps to push your website to GitHub and activate GitHub Pages:

### Step 1: Create a GitHub Repository
1. Go to [GitHub - New Repository](https://github.com/new).
2. Set **Repository name** to `blog` (or `username.github.io` if you want a root domain site).
3. Keep it **Public** and leave "Add a README file" unchecked.
4. Click **Create repository**.

### Step 2: Push Local Code to GitHub
In your terminal (inside `D:/cv/blog`), run:

```bash
git add .
git commit -m "feat: initial Jekyll dark glassmorphism website setup"
git remote add origin https://github.com/LyDucAnh/blog.git
git branch -M main
git push -u origin main
```

*(Note: Replace `LyDucAnh/blog.git` with your actual GitHub username and repository name if different).*

### Step 3: Configure GitHub Pages Settings
1. On GitHub, navigate to your repository **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
3. That's it! GitHub Actions will trigger automatically on your `git push`, build the site, and host it live at:
   `https://LyDucAnh.github.io/blog/`

---

## 🛠️ Customization

- **Site Metadata**: Update `_config.yml` (title, author, email, baseurl, description).
- **Avatar & Images**: Replace `assets/images/avatar.jpg` or `assets/images/hero.jpg`.
- **Blog Posts**: Add new `.md` files in the `_posts/` folder using the format `YYYY-MM-DD-title.md`.
