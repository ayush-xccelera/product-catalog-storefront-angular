import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-price-display',
  standalone: true,
  templateUrl: './price-display.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class PriceDisplayComponent {
  @Input({ required: true })
  price!: number;

  get formattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }
}
