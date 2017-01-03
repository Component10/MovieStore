import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ActionComponent } from './action/action.component';
import { GenresService } from './genres.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ActionComponent ],
  providers: [ GenresService ]
})

export class GenresModule {}
