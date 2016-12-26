import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css']
})

export class SignUpComponent {
  constructor(private user: UserService) {}

  signUp() {
    let email = (<HTMLInputElement>document.getElementById('inputEmail')).value.toString(),
        password = (<HTMLInputElement>document.getElementById('inputPassword')).value.toString();

    this.user.createUser(email, password);

    console.log('Email : ' + email);
    console.log('Password: ' + password);
  }
}
