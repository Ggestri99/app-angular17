import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  template: `
    <app-nav />
    <router-outlet />
  `,
  styles: `
    app-nav {
      position: fixed;
      width: 100%;
    }
  `
})
export class AppComponent {
  title = 'app-version17';
}
