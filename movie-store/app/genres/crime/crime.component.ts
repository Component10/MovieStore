import { Component } from '@angular/core';

import { GenresService } from '../genres.service';

@Component({
  selector: 'crime-component',
  templateUrl: 'crime.component.html'
})


export class CrimeComponent {
  crimeMovies: any[];

  constructor(private genresService: GenresService) {
    this.crimeMovies = this.genresService.getSpecificMovies('Crime');
  }
}
