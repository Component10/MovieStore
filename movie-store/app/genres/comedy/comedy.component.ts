import { Component } from '@angular/core';

import { GenresService } from '../genres.service';

@Component({
  selector: 'comedy-genre',
  templateUrl: './comedy.component.html'
})

export class ComedyComponent {
  comedyMovies: any[];

  constructor(private genresService: GenresService) {
    this.comedyMovies = this.genresService.getSpecificMovies('Comedy');
  }
}
