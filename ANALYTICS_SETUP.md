# Google Analytics 4 (GA4) Tracking Setup Guide

This guide explains how to enable page view tracking and visitor analytics on your Jekyll website using Google Analytics 4.

---

## 🛠 Step 1: Create a Google Analytics Account & Property

1. Open [Google Analytics](https://analytics.google.com/) and sign in with your Google account.
2. Click **Admin** (gear icon in the bottom left corner).
3. Click **+ Create Account** (or **+ Create Property** if you already have an account).
4. Enter an Account Name (e.g. `Ly Duc Anh Blog`).
5. Enter a Property Name (e.g. `Tech Blog & Portfolio`), set your reporting timezone, and click **Next**.
6. Select your industry category and business size, then click **Create**.

---

## 🌐 Step 2: Set Up a Web Data Stream

1. Under **Choose a platform**, select **Web**.
2. Enter your Website URL: `https://LyDucAnh.github.io/blog`
3. Enter a Stream Name: `GitHub Pages Blog`.
4. Click **Create Stream**.
5. Once created, copy your **MEASUREMENT ID** (it starts with `G-`, e.g., `G-12345ABCDE`).

---

## ⚙️ Step 3: Add your Measurement ID to Jekyll

1. Open [`_config.yml`](_config.yml) in your project workspace.
2. Find the line:
   ```yaml
   google_analytics: "G-XXXXXXXXXX"
   ```
3. Replace `"G-XXXXXXXXXX"` with your actual Measurement ID:
   ```yaml
   google_analytics: "G-12345ABCDE"
   ```
4. Save the file.

---

## 🚀 Step 4: Commit and Push to GitHub

In your terminal, run:

```bash
git add _config.yml _includes/head.html ANALYTICS_SETUP.md
git commit -m "feat: configure Google Analytics 4 tracking"
git push origin main
```

Once pushed, GitHub Actions will redeploy your site. Google Analytics will automatically start tracking visitors, page views, active users, session durations, device types, and geographic locations!

---

## 📊 How to View Visitor Tracking Data

1. Log into [Google Analytics](https://analytics.google.com/).
2. Navigate to **Reports** -> **Realtime** to watch live active visitors on your site.
3. Check **Reports** -> **Engagement** -> **Pages and screens** to see which blog posts receive the most views.
