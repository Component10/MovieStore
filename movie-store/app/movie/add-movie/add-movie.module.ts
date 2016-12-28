import { NgModule } from '@angular/core';

import { AddMovieComponent } from './add-movie.component';
import { MovieService } from '../movie.service';
import { SimpleNotificationsModule, NotificationsService  } from 'angular2-notifications';

@NgModule({
  imports: [ SimpleNotificationsModule ],
  declarations: [ AddMovieComponent ],
  providers: [ MovieService, NotificationsService ]
})

export class AddMovieModule {}
