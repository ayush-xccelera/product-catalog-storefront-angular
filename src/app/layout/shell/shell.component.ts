import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './shell.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ShellComponent {}
