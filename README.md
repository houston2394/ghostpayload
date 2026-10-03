# ghostpayload.tech

Personal site, project showcase, and journal — built with [Astro](https://astro.build).

## Editing

| What                        | Where                                  |
| --------------------------- | -------------------------------------- |
| Name, bio, links, tagline   | `src/data/site.ts`                     |
| Featured & listed projects  | `src/data/site.ts` (`projects` array)  |
| Blog posts                  | `src/content/blog/*.md`                |
| About page copy             | `src/pages/about.astro`                |
| Global styling / theme      | `src/layouts/Base.astro`               |

### Add a blog post

Drop a Markdown file in `src/content/blog/`:

```markdown
---
title: 'Your title'
description: 'One-line summary for cards and SEO.'
pubDate: 2026-10-10
tags: ['osint', 'notes']
draft: false
---

Your post body in Markdown.
```

Set `draft: true` to keep a post out of the build until it's ready.

## Commands

```sh
npm install        # install deps
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build to ./dist
npm run preview    # preview the production build
```

## Deploy

Pushing to `main` auto-deploys via Vercel. The custom domain is `ghostpayload.tech`.
