import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule, RouterLink],
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
          <div class="d-flex">
              <img src="../../../../assets/img/logo.svg" alt="Simpsons" width="100px">
          </div>
          <div class="w-100 d-flex justify-content-center">
              <a style="margin-right: 50px;" href="/home" class="toolbar-link">Inicio</a>
              <a href="/list" class="toolbar-link">Listado</a>
          </div>
          <div class="d-flex">
              <img src="../../../../assets/img/logo.svg" alt="Simpsons" width="100px">    
          </div>
      </mat-toolbar-row>
    </mat-toolbar>

  `,
  styles: `
    mat-toolbar {
      background-color: #474242;
    };
    .mat-toolbar-row .toolbar-link {
      color: white;
      text-decoration: none;
      margin: 0 10px;
      font-size: 18px; 
      transition: color 0.3s;
    };
    .mat-toolbar-row .toolbar-link:hover {
      color: #e0e0e0; 
    }
  `
})
export class NavComponent {

}
