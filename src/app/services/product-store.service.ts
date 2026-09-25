import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../types';
import { mockProducts } from '../data/mock-data';

@Injectable({
  providedIn: 'root',
})
export class ProductStoreService {
  // TODO(USE_MOCK): verify path + response shape against the real
  // backend's OpenAPI schema before flipping this to false.
  readonly USE_MOCK = true;

  // MOCK: Returns all products from mock data
  private localGetAll(): Product[] {
    return mockProducts;
  }

  // MOCK: Returns a product by slug from mock data
  private localGetBySlug(slug: string): Product | undefined {
    return mockProducts.find((product) => product.slug === slug);
  }

  getAll(): Observable<Product[]> {
    if (this.USE_MOCK) return of(this.localGetAll());
    // Real API call would go here
    return of(this.localGetAll());
  }

  getBySlug(slug: string): Observable<Product | undefined> {
    if (this.USE_MOCK) return of(this.localGetBySlug(slug));
    // Real API call would go here
    return of(this.localGetBySlug(slug));
  }
}
