# AceFX Platform

AceFX is a forex education, mentorship and trading community platform.

This repository is an npm-workspaces monorepo. The web application and API are separate deployable services, with shared TypeScript contracts.

## Repository layout

```text
apps/
  web/       Next.js frontend (Vercel)
  api/       Express API (Debian server / PM2)
packages/
  shared/    Shared TypeScript contracts
docs/        Architecture and deployment notes
```

## Requirements

- Node.js 20.9+
- npm 10+

## Local development

Install dependencies once from the repository root:

```bash
npm install
```

Copy `.env.example` to `.env` for API configuration. For the frontend, set `NEXT_PUBLIC_API_URL` in `apps/web/.env.local`.

Run both services:

```bash
npm run dev
```

Or run one service:

```bash
npm run dev:web
npm run dev:api
```

- Web: http://localhost:3000
- API: http://localhost:4000
- Health: http://localhost:4000/api/v1/health

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

### Web — Vercel

Connect the repository to Vercel and configure the web project using `apps/web` as its application directory. Keep the workspace root available during dependency installation. Set `NEXT_PUBLIC_API_URL` to the public API base URL.

### API — Debian server

```bash
npm ci
npm run build --workspace @acefx/shared
npm run build --workspace @acefx/api
npm run start --workspace @acefx/api
```

Use PM2 to keep the API process alive. Put it behind Nginx with HTTPS before exposing it publicly. Set `WEB_ORIGIN` to the deployed frontend origin.

## Current functionality

- Responsive AceFX public landing page with a navy/violet visual system, illustrated hero, learning-path cards, mentorship, market insights and newsletter-style footer. The header uses a floating, sticky glassmorphism control group rather than a full-width navigation bar.
- Express API bootstrap and health endpoint.
- Shared API response and role contracts.
- Security headers, CORS allow-listing, JSON body limits and API rate limiting.
- Startup environment validation and graceful HTTP shutdown.

Authentication, database models, payments, course delivery, signals, media storage and admin/member dashboards are follow-up modules.

All sample market figures and notes in the web UI are illustrative, not live trading data or financial advice.
