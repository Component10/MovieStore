import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ActionComponent } from './action/action.component';
import { AdventureComponent } from './adventure/adventure.component'

import { GenresService } from './genres.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ActionComponent, AdventureComponent ],
  providers: [ GenresService ]
})

export class GenresModule {}
