# Sentinels Design Lab

Standalone React and Vite website for Sentinels Design Lab.

## Architecture

- Provider-neutral React/Vite frontend
- Zero Base44 runtime dependencies, APIs, configuration, or hosted assets
- Dependency-free pathname routing for the static marketing pages
- Firebase may be added when authentication, persistent data, storage, or server-side workflows are required

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm audit --omit=dev
npm run lint
npm run typecheck
npm run build
```

The production build is written to `dist/` and can be deployed to Vercel or any static hosting platform that supports SPA rewrites.
