import { NgModule } from '@angular/core';

import { ActionComponent } from './action/action.component';
import { GenresService } from './genres.service';

@NgModule({
  declarations: [ ActionComponent ],
  providers: [ GenresService ]
})

export class GenresModule {}
