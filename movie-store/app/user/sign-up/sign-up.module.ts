import { NgModule } from '@angular/core';

import { SignUpComponent } from './sign-up.component';
import { UserService } from '../user.service';

@NgModule({
 declarations: [SignUpComponent],
 providers: [UserService]
})

export class SignUpModule {}
