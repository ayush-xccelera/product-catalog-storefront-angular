import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  templateUrl: './add-to-cart-button.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AddToCartButtonComponent {
  @Input({ required: true })
  inStock!: boolean;

  @Output()
  addToCart = new EventEmitter<void>();

  onClick(): void {
    this.addToCart.emit();
  }
}
