// IMPORTANT: This service will be fixed later.

import { Injectable } from '@angular/core';

import { MovieService } from '../../movie.service';
import { NotificationsService  } from 'angular2-notifications';

declare var $: any;

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()

export class AddMovieImdbService {

   constructor(private movieService: MovieService, private notificationService: NotificationsService) {}

   getMovie(id: string) {
     $.ajax({
       url: 'http://www.omdbapi.com/?i=' + id + '&plot=short&r=json',
       crossDomain: true,
       dataType: 'json'
     }).then(data => {
       this.movieService.addMovie(data);

       this.notificationService.success('Movie', 'The movie was added to our database.');
     });
   }
}
