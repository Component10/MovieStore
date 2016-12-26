import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';

import { TopMoviesComponent } from './top-movies.component';
import { TopMoviesService } from './top-movies.service';

@NgModule({
  imports: [ AngularFireModule, BrowserModule],
  declarations: [ TopMoviesComponent ],
  providers: [ TopMoviesService ]
})

export class TopMoviesModule {}
