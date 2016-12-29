import { NgModule } from '@angular/core';

import { AddMovieComponent } from './add-movie.component';
import { AddMovieImdbComponent } from './add-movie-with-imdb/add-movie-imdb.component';

import { MovieService } from '../movie.service';
import { AddMovieImdbService } from './add-movie-with-imdb/add-movie-imdb.service';
import { SimpleNotificationsModule, NotificationsService  } from 'angular2-notifications';

@NgModule({
  imports: [ SimpleNotificationsModule ],
  declarations: [ AddMovieComponent, AddMovieImdbComponent ],
  providers: [ MovieService, NotificationsService, AddMovieImdbService ]
})

export class AddMovieModule {}
