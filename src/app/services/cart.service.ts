import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../types';
import { CartItem } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // In-memory only: cart state lives for the duration of the session and is
  // intentionally reset on a hard page reload (no persistence layer).
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>([]);

  readonly items$: Observable<CartItem[]> = this.itemsSubject.asObservable();

  readonly totalCount$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((sum, item) => sum + item.quantity, 0))
  );

  readonly grandTotal$: Observable<number> = this.items$.pipe(
    map((items) =>
      items.reduce((sum, item) => sum + item.quantity * item.product.price, 0)
    )
  );

  get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  addToCart(product: Product): void {
    const current = this.itemsSubject.value;
    const existing = current.find((item) => item.product.slug === product.slug);

    if (existing) {
      this.itemsSubject.next(
        current.map((item) =>
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.itemsSubject.next([...current, { product, quantity: 1 }]);
    }
  }

  removeFromCart(slug: string): void {
    this.itemsSubject.next(
      this.itemsSubject.value.filter((item) => item.product.slug !== slug)
    );
  }
}
