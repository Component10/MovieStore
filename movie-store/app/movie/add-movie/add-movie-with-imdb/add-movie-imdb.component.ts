import { Component } from '@angular/core';

import { AddMovieImdbService } from './add-movie-imdb.service';


@Component({
  selector: 'add-movie-imdb',
  templateUrl: './add-movie-imdb.component.html'
})

export class AddMovieImdbComponent {

  public options = {
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: false,
    clickToClose: false,
    maxLength: 500
  };

  constructor(private movie: AddMovieImdbService) {}

  add() {
    let id = (<HTMLInputElement>document.getElementById('id')).value.toString();

    this.movie.getMovie(id);
  }
}
