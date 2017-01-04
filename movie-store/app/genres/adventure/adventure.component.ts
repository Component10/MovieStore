import { Component } from '@angular/core';

import { GenresService } from '../genres.service';

@Component({
  selector: 'adventure',
  templateUrl: 'adventure.component.html'
})

export class AdventureComponent {
  adventureMovies: any[];

  constructor(private genres: GenresService) {
    this.adventureMovies = this.genres.getAdventureMovies();
  }
}
