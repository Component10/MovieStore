import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { GenresService } from '../genres.service';

@Component({
  selector: 'genre-action',
  templateUrl: './action.component.html'
})

export class ActionComponent {
  actionMovies: any[];

  constructor(private af: AngularFire, private genres: GenresService) {
    this.actionMovies = this.genres.getActionMovies();
  }
}
