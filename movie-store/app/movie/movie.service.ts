import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class MovieService {
  private movies: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.movies = this.af.database.list('/movies');
  }

  addMovie(movie: any) {
    // TODO: Validation

    this.movies.push(movie);
  }
}
