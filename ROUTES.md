# Product Catalog Storefront (Angular) — Routes & Navigation

## How to run

```
cd /workspace/frontend_runs/ae532410-3480-48a6-8573-9880368303f6/project
npm install --legacy-peer-deps && npm start
```

Then open http://localhost:37735

## Routes

| Route | Component file | Description |
|-------|----------------|-------------|
| / | (redirect) | Redirects to /home |
| /home | src/app/pages/home/home.component.ts | Lists all three products with name, price ($XX.XX format), and stock status (In Stock / Sold Out) |
| /products/:slug | src/app/pages/product-detail/product-detail.component.ts | Displays full product details including name, price, stock status, and an Add to Cart button (disabled and labeled "Sold Out" when out of stock). Shows 404 for invalid slugs. |
| /about | src/app/pages/about/about.component.ts | Static informational page demonstrating multi-route navigation |
| ** (wildcard) | src/app/pages/not-found/not-found.component.ts | Handles all unmapped routes and displays a 404 Not Found page |

## Navigation map

- **Home** → Product Detail (click product card)
- **Home** → About (header navigation link)
- **Product Detail** → Home (back button)
- **Product Detail** → About (header navigation link)
- **About** → Home (header navigation link or back button)
- **About** → Product Detail (header to home, then click product card)
- **Any route** → Not Found (navigate to invalid route or invalid product slug)
- **Not Found** → Home (click "Go Home" button)

## Shared components

- **src/app/components/header/header.component.ts** — Top navigation bar with "Product Catalog" logo/home link and navigation items (Home, About) with active state indicators
- **src/app/components/footer/footer.component.ts** — Footer with copyright text
- **src/app/components/product-card/product-card.component.ts** — Product list item card displaying name, price, and stock status; links to detail page
- **src/app/components/price-display/price-display.component.ts** — Formats and displays price as $XX.XX
- **src/app/components/stock-indicator/stock-indicator.component.ts** — Displays "In Stock" (green) or "Sold Out" (red) badge
- **src/app/components/add-to-cart-button/add-to-cart-button.component.ts** — Button labeled "Add to Cart" when product is in stock, disabled and labeled "Sold Out" when out of stock

## Design tokens

### Colors
- **Primary (#3B82F6)** — Links, buttons, active navigation
- **Success (#22C55E)** — In Stock status indicator
- **Danger (#EF4444)** — Sold Out status indicator
- **Muted (#666666)** — Secondary text
- **Surface (#F5F5F5)** — Light background
- **Border (#E0E0E0)** — Dividers and borders

### Spacing (in pixels)
- xs: 4, sm: 8, md: 12, lg: 16, xl: 20, 2xl: 24, 3xl: 32, 4xl: 48

### Typography
- **Font Family:** -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
- **Heading 1:** 32px, font-weight 700, line-height 1.2
- **Heading 2:** 24px, font-weight 700, line-height 1.3
- **Body:** 16px, font-weight 400, line-height 1.5
- **Small:** 14px, font-weight 400, line-height 1.4

## Mock data

Three fixed products seeded in src/app/data/mock-data.ts:
1. **Wireless Mouse** — $29.99, in stock
2. **Mechanical Keyboard** — $89.50, in stock
3. **USB-C Hub** — $45.00, sold out
