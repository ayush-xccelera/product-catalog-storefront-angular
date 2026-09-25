import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  it('creates without crashing', () => {
    TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [provideRouter([])],
    });
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
