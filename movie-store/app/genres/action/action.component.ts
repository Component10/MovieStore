import { Component } from '@angular/core';

import { GenresService } from '../genres.service';

@Component({
  selector: 'genre-action',
  templateUrl: './action.component.html'
})

export class ActionComponent {
  loadpage: number = 0;
  actionMovies: any[];

  constructor(private genres: GenresService) {
    this.loadpage += 1;
    this.actionMovies = this.genres.getActionMovies(this.loadpage);
  }
}
