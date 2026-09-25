import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductStoreService } from '../../services/product-store.service';
import { Product } from '../../types';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ProductCardComponent],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  isLoading = true;

  constructor(private productStore: ProductStoreService) {}

  ngOnInit(): void {
    this.productStore.getAll().subscribe((products) => {
      this.products = products;
      this.isLoading = false;
    });
  }
}
