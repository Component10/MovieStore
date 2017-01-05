import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Validator } from '../../utils/validator';
import { UserService } from '../user.service';
import { NotificationsService  } from 'angular2-notifications';

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css']
})

export class SignUpComponent {
  private validator: any;

  public options = {
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: false,
    clickToClose: false,
    maxLength: 500
  };

  constructor(private user: UserService, private notificationService: NotificationsService, private router: Router) {
    this.validator = new Validator();
  }

  signUp() {
    let email = (<HTMLInputElement>document.getElementById('inputEmail')).value.toString(),
        password = (<HTMLInputElement>document.getElementById('inputPassword')).value.toString();

    if (this.validator.isEmpty(email)) {
      this.notificationService.error('Error', 'Please enter a email.');

      return;
    }

    if (!this.validator.passwordGreaterThenSix(password)) {
      this.notificationService.error('Error', 'Password must be greater then 6 symbols.');

      return;
    }

    this.user.createUser(email, password);

    this.notificationService.success('Successful', 'Your sign up is successful.');
  }
}
