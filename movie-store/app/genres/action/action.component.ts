import { Component } from '@angular/core';

import { GenresService } from '../genres.service';

@Component({
  selector: 'genre-action',
  templateUrl: './action.component.html'
})

export class ActionComponent {
  constructor(private genres: GenresService) {}

  show() {
    this.genres.getActionMovies();
  }
}
