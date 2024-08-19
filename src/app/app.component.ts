import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <!-- Aquí está el contenido del componente principal -->
      <p>Este es el contenido de AppComponent.</p>

      <!-- Aquí se muestra el componente user -->
      <app-user></app-user>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-17-app';
}
