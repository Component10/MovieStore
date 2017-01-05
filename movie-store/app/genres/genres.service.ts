import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class GenresService {
  private movies: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.movies = this.af.database.list('/movies', { preserveSnapshot: true });
  }

  public getActionMovies(): any[] {
    let actionMovies: any[] = [];

    this.movies.subscribe(movies => {
      movies.forEach(movie => {
        if (movie.val().Genre !== undefined) {
          if (movie.val().Genre.indexOf('Action') !== -1) {
            actionMovies.push(movie.val());
          };
        }
      });
    });

    return actionMovies;
  }

  public getAdventureMovies() {
    let adventureMovies: any[] = [];

    this.movies.subscribe(movies => {
      movies.forEach(movie => {
        if (movie.val().Genre !== undefined) {
          if (movie.val().Genre.indexOf('Adventure') !== -1) {
            adventureMovies.push(movie.val());
          }
        }
      });
    });

    return adventureMovies;
  }

  public getAnimationMovies() {

  }

  public getComedyMovies() {

  }

  public getGrimeMovies() {

  }
}
