// MOCK DATA — placeholder records for local development only.
// Replace with real API data before production use.

import { Product } from '../types';

// MOCK: Seed data for product catalog
export const mockProducts: Product[] = [
  {
    slug: 'wireless-mouse',
    name: 'Wireless Mouse',
    price: 29.99,
    inStock: true,
  },
  {
    slug: 'mechanical-keyboard',
    name: 'Mechanical Keyboard',
    price: 89.50,
    inStock: true,
  },
  {
    slug: 'usb-c-hub',
    name: 'USB-C Hub',
    price: 45.00,
    inStock: false,
  },
];
