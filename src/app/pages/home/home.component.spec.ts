import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  it('creates without crashing', () => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideAnimationsAsync(),
      ],
    });
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
