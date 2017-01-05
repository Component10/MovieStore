import { Component } from '@angular/core';

import { GenresService } from '../genres.service';

@Component({
  selector: 'genre-action',
  templateUrl: './action.component.html'
})

export class ActionComponent {
  actionMovies: any[];

  constructor(private genres: GenresService) {
    this.actionMovies = this.genres.getActionMovies();
  }
}
