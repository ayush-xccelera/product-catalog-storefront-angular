import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../types';
import { PriceDisplayComponent } from '../price-display/price-display.component';
import { StockIndicatorComponent } from '../stock-indicator/stock-indicator.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule, PriceDisplayComponent, StockIndicatorComponent],
  templateUrl: './product-card.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ProductCardComponent {
  @Input({ required: true })
  product!: Product;
}
