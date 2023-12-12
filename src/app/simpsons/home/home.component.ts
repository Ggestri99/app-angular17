import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,RouterLink],
  template: `
    <div class="app">
     <div>
         <button routerLink="/list" mat-fab extended color="accent">
             <mat-icon>list</mat-icon>
             Ir al Listado
         </button>
     </div>
    </div>
  `,
  styles: `
    .app {
      background-image: url('../../../assets/img/fondofinal.jpg');
      background-position: center;
      background-size: cover;
      height: 100vh;
      max-width: 100vw;
      display: flex;
      justify-content: center;
    }

  button {
      top: 14%;
      width: 250px;
    }
  `
})
export class HomeComponent {

}
