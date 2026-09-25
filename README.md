# Product Catalog Storefront (Angular)

A simple, client-rendered product catalog application showcasing three tech products with full navigation between product listings, individual product details, and an about page. No backend or API integration required.

## Tech stack

Angular (standalone components) + TypeScript, Tailwind CSS.

## Getting started

```
npm install --legacy-peer-deps
npm start
```

Then open http://localhost:37735

## Environment variables

Angular does not read .env files directly — see .env.example, which documents the value; copy it into src/environments/environment.ts's apiUrl field. Every entity runs on local mock data (readonly USE_MOCK = true in each service) until that's set and each service's flag is flipped to false.

## Project structure

- `src/app/pages/` — Full-screen components (home, product-detail, about, not-found)
- `src/app/components/` — Shared UI components (header, footer, product card, price display, stock indicator, add-to-cart button)
- `src/app/layout/` — Shell layout wrapper combining header, footer, and outlet
- `src/app/services/` — Data services (product store, auth interceptor)
- `src/app/data/` — Mock product data
- `src/app/types/` — TypeScript types for Product
- `src/environments/` — Environment configuration
