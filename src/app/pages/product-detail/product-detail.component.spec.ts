import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  it('creates without crashing', () => {
    TestBed.configureTestingModule({
      imports: [ProductDetailComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideAnimationsAsync(),
      ],
    });
    const fixture = TestBed.createComponent(ProductDetailComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
