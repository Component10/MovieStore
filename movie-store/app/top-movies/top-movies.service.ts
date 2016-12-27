import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()


export class TopMoviesService {

  getTopMovies(af: AngularFire): FirebaseListObservable<any[]> {
    return af.database.list('/movies', {
      query : {
        limitToFirst: 5
      }
    });
  }

}
