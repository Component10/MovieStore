import { NgModule } from '@angular/core';

import { AddMovieComponent } from './add-movie.component';
import { MovieService } from '../movie.service';

@NgModule({
  declarations: [ AddMovieComponent ],
  providers: [ MovieService ]
})

export class AddMovieModule {}
