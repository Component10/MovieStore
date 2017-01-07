import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ActionComponent } from './action/action.component';
import { AdventureComponent } from './adventure/adventure.component';
import { AnimationComponent } from './animation/animation.component';
import { ComedyComponent } from './comedy/comedy.component';
import { CrimeComponent} from './crime/crime.component';

import { GenresService } from './genres.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ActionComponent, AdventureComponent, AnimationComponent, ComedyComponent, CrimeComponent ],
  providers: [ GenresService ]
})

export class GenresModule {}
