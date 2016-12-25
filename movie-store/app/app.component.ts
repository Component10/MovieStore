import { Component, OnInit} from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';

@Component({
    selector: 'mvdb-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  movies: FirebaseListObservable<any[]>;

  constructor(private af : AngularFire, private appService: AppService) {}

  ngOnInit(){
    this.movies = this.appService.getAllMovies(this.af);
  }
}
