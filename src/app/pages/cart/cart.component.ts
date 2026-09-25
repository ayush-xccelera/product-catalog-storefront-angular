import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../types';
import { PriceDisplayComponent } from '../../components/price-display/price-display.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, PriceDisplayComponent],
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent {
  items$: Observable<CartItem[]>;
  grandTotal$: Observable<number>;

  constructor(private cartService: CartService) {
    this.items$ = this.cartService.items$;
    this.grandTotal$ = this.cartService.grandTotal$;
  }

  subtotal(item: CartItem): number {
    return item.product.price * item.quantity;
  }

  remove(slug: string): void {
    this.cartService.removeFromCart(slug);
  }
}
