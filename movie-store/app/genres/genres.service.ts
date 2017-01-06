import { Injectable, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2';

@Injectable()

export class GenresService {
  private movies: FirebaseObjectObservable<any[]>;

  constructor(private af: AngularFire) {
    this.movies = this.af.database.object('https://moviestore-6d068.firebaseio.com/movies', { preserveSnapshot: true });
  }

  public getActionMovies(): any[] {
     let actionMovies: any[] = [];

     this.movies.subscribe((movies) => {
        let allmovies = movies.val();

        for (let movie in allmovies) {
            if (allmovies.hasOwnProperty(movie)) {
              if (allmovies[movie].Genre.indexOf('Action') > -1) {
               actionMovies.push(allmovies[movie]);
              }
            }
        }
      });

       return actionMovies;
  }

  public getAdventureMovies(): any[] {
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
