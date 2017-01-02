import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class GenresService {
  private movies: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.movies = this.af.database.list('/movies', { preserveSnapshot: true });
  }

  getActionMovies() {
    this.movies.subscribe(movies => {
      movies.forEach(movie => {
        console.log(movie.key + ' : ' + movie.val().Title );
      });
    });
  }

  getAdventureMovies() {

  }

  getAnimationMovies() {

  }

  getComedyMovies() {

  }

  getGrimeMovies() {

  }
}
