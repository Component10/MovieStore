import { NgModule } from '@angular/core';

import { SignUpComponent } from './sign-up.component';
import { UserService } from '../user.service';
import { SimpleNotificationsModule, NotificationsService  } from 'angular2-notifications';

@NgModule({
  imports: [ SimpleNotificationsModule ],
  declarations: [ SignUpComponent ],
  providers: [ UserService, NotificationsService ]
})

export class SignUpModule {}
