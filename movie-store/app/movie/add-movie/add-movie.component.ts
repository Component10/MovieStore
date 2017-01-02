import { Component } from '@angular/core';

import { MovieService } from '../movie.service';

import { Validator } from '../../utils/validator';
import { NotificationsService  } from 'angular2-notifications';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html'
})

export class AddMovieComponent {
  private validator: any;

  public options = {
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: false,
    clickToClose: false,
    maxLength: 500
  };

  constructor(private movie: MovieService, private notificationService: NotificationsService) {
    this.validator = new Validator();
  }

  add() {
    let title = (<HTMLInputElement>document.getElementById('title')).value.toString(),
        poster = (<HTMLInputElement>document.getElementById('image')).value.toString(),
        released = (<HTMLInputElement>document.getElementById('date')).value.toString(),
        actors = (<HTMLInputElement>document.getElementById('actors')).value.toString(),
        genre = (<HTMLInputElement>document.getElementById('genre')).value.toString(),
        runtime = (<HTMLInputElement>document.getElementById('runtime')).value.toString();

    if (this.validator.isEmpty(title)
        || this.validator.isEmpty(poster)
        || this.validator.isEmpty(released)
        || this.validator.isEmpty(actors)
        || this.validator.isEmpty(genre)
        || this.validator.isEmpty(runtime)) {

      this.notificationService.error('Error', 'All fields must be filled in');

      return;
    }

    let movie = {
      Title: title,
      Poster: poster,
      Released: released,
      Actors: actors,
      Genres: genre,
      Runtime: runtime
    };

    this.movie.addMovie(movie);

    this.notificationService.success('Successful!', 'You add a movie.');
  }
}
