import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable({});

export class AppService {

  getAllMovies(af: AngularFire): FirebaseListObservable<any[]> {
    return af.database.list('/movies');
  }
}
