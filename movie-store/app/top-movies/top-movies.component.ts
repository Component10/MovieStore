import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TopMoviesService } from './top-movies.service';

@Component({
  selector: 'top-movies',
  templateUrl: './top-movies.component.html'
})



export class TopMoviesComponent implements OnInit {
  movies: FirebaseListObservable<any[]>;
  showMovieDetails: boolean = true;

  constructor (private af: AngularFire, private topMoviesService: TopMoviesService) {}

showDetails() {
    if (this.showMovieDetails === true) {
      this.showMovieDetails = false;
    } else {
      this.showMovieDetails = true;
    }

  }

  ngOnInit() {
    this.movies = this.topMoviesService.getTopMovies(this.af);
  }
}
