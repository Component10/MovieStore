import { Injectable, } from '@angular/core';

import { AngularFire, FirebaseObjectObservable  } from 'angularfire2';

@Injectable()

export class GenresService {
  private movies: FirebaseObjectObservable<any[]>;

  constructor(private af: AngularFire) {
    this.movies = this.af.database.object('https://moviestore-6d068.firebaseio.com/movies', { preserveSnapshot: true });
  }

  public getSpecificMovies(genre: string): any[] {
    let specificMovies: any[] = [];

    this.movies.subscribe((movies) => {
       let allMovies = movies.val();

       for (let movie in allMovies) {
           if (allMovies.hasOwnProperty(movie)) {
             if (allMovies[movie].Genre.indexOf(genre) > -1) {
              specificMovies.push(allMovies[movie]);
             }
           }
       }
     });

    return specificMovies;
  }
}
