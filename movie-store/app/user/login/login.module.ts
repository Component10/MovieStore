import { NgModule } from '@angular/core';
 import { RouterModule } from '@angular/router';

import { LogInComponent } from './login.component';
import { UserService } from '../user.service';

@NgModule({
 imports: [ RouterModule ],
 declarations: [ LogInComponent ],
 providers: [ UserService ]
})

export class LogInModule {}
