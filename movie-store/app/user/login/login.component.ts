import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'log-in',
  templateUrl: './login.component.html'
})

export class LogInComponent {
  constructor(private user: UserService) {}

  login() {
    let email = (<HTMLInputElement>document.getElementById('inputEmail')).value.toString(),
        password = (<HTMLInputElement>document.getElementById('inputPassword')).value.toString();

    this.user.login(email, password);
  }
}
