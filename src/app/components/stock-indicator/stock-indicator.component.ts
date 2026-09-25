import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stock-indicator',
  standalone: true,
  templateUrl: './stock-indicator.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StockIndicatorComponent {
  @Input({ required: true })
  inStock!: boolean;
}
