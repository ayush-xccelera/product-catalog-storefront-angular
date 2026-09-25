import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { ProductStoreService } from '../../services/product-store.service';
import { Product } from '../../types';
import { PriceDisplayComponent } from '../../components/price-display/price-display.component';
import { StockIndicatorComponent } from '../../components/stock-indicator/stock-indicator.component';
import { AddToCartButtonComponent } from '../../components/add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    RouterModule,
    PriceDisplayComponent,
    StockIndicatorComponent,
    AddToCartButtonComponent,
  ],
  templateUrl: './product-detail.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  isLoading = true;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private productStore: ProductStoreService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) {
      this.notFound = true;
      this.isLoading = false;
      return;
    }

    this.productStore.getBySlug(slug).subscribe((product) => {
      if (product) {
        this.product = product;
      } else {
        this.notFound = true;
      }
      this.isLoading = false;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
