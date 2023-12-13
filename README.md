# Vercel OG

![build-test](https://github.com/sanwebinfo/og-image/workflows/build-test/badge.svg)  

Simple API to Generate the OG image for website and blogs.

## Features

- Next.JS
- Vercel Edge Functions
- Typescript
- Next API Routes
- `@vercel/og` Module for Generate og image

## Modification

- API: `/src/app/api/og/route.jsx` Modify the og image generation according to your needs.

## How to use?

```sh
http://localhost:3000/api/og?title=sanweb
```

## Installation 📦

- Required node.js LTS version (18 or 20)
- `pnpm` package manager

```sh
npm install -g pnpm
```

- Clone this repo or Download

```sh
git clone https://github.com/sanwebinfo/og-image
cd og-image
pnpm install
```

- Test the site

```sh
pnpm dev
```

- Build a site

```sh
pnpm build
```

- Test the Production build

```sh
pnpm start
```

## Free Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsanwebinfo%2Fog-image)  

## Reference

- Open Graph (OG) Image Generation - <https://vercel.com/docs/functions/edge-functions/og-image-generation>
- Guide to Create OG API using Next.js and vercel - <https://blog.dennisokeeffe.com/blog/2022-10-15-using-the-new-vercel-opengraph-image-generation>

## LICENSE

MIT
