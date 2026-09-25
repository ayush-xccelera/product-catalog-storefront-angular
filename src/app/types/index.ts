export interface Product {
  slug: string;
  name: string;
  price: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
