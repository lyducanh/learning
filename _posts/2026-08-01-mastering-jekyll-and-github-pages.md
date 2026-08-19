---
layout: post
title: "Mastering Jekyll and GitHub Pages: A Modern Workflow"
category: "Web Development"
author: "Ly Duc Anh"
date: 2026-08-01 14:30:00 +0700
subtitle: "Deploying custom glassmorphic static sites effortlessly with GitHub Actions."
---

Jekyll remains one of the most reliable static site generators for developer documentation and personal portfolios. Combined with **GitHub Pages** and **GitHub Actions**, you get total customizability with zero server maintenance costs.

## Why Use GitHub Actions for Jekyll?

Using GitHub Actions instead of GitHub's legacy built-in Jekyll compiler gives you:

- Support for Jekyll 4.x and custom Ruby gems.
- Faster build times with gem dependency caching.
- Direct control over asset compilation and base URLs.

### Example Workflow Configuration

```yaml
name: Deploy Jekyll site to Pages
on:
  push:
    branches: ["main"]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/build-pages@v3
      - uses: actions/deploy-pages@v4
```

With this single setup, every `git push` automatically updates your live site in seconds!
