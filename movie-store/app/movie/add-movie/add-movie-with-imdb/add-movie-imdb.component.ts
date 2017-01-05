import { Component } from '@angular/core';

import { AddMovieImdbService } from './add-movie-imdb.service';
import { Validator } from '../../../utils/validator';
import { NotificationsService  } from 'angular2-notifications';


@Component({
  selector: 'add-movie-imdb',
  templateUrl: './add-movie-imdb.component.html'
})

export class AddMovieImdbComponent {
  private validator: any;

  public options = {
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: false,
    clickToClose: false,
    maxLength: 500
  };

  constructor(private movie: AddMovieImdbService, private notificationService: NotificationsService) {
    this.validator = new Validator();
  }

  add() {
    let id = (<HTMLInputElement>document.getElementById('id')).value.toString();

    if (this.validator.isEmpty(id)) {
      this.notificationService.error('Error', 'The field must be filled in');

      return;
    }

    this.movie.getMovie(id);
  }
}
