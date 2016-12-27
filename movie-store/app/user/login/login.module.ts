import { NgModule } from '@angular/core';

import { LogInComponent } from './login.component';
import { UserService } from '../user.service';

@NgModule({
 declarations: [ LogInComponent ],
 providers: [ UserService ]
})

export class LogInModule {}
