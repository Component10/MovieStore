import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class GenresService {
  private movies: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.movies = this.af.database.list('/movies', { preserveSnapshot: true });
  }

  public getActionMovies(loadpage: number): any[] {
    let actionMovies: any[] = [];

    this.movies.subscribe(movies => {
      movies.forEach(movie => {
        if (movie.val().Genre !== undefined && loadpage === 1) {
          if (movie.val().Genre.indexOf('Action') !== -1) {
            actionMovies.push(movie.val());
          };
        }
      });
      console.log('Movies : ' + movies.length + ' Action Movies : ' + actionMovies.length + ' Load page : ' + loadpage);
    });

    return actionMovies;
  }

  public getAdventureMovies() {

  }

  public getAnimationMovies() {

  }

  public getComedyMovies() {

  }

  public getGrimeMovies() {

  }
}
