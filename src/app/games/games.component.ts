import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
    @for(game of games; track game.id){
        <li (click)="fav(game.name)">{{game.name}}</li>
    }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = ''; // <-- Decorador @Input
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn'
    },
    {
      id: 3,
      name: 'Bloodborne'
    }
  ];

  trackById(index: number, game: { id: number }) {
    return game.id;
  }
}
