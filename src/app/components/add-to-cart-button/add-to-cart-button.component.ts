import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  templateUrl: './add-to-cart-button.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AddToCartButtonComponent {
  @Input({ required: true })
  inStock!: boolean;
}
