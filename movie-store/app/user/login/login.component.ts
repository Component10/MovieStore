import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'log-in',
  templateUrl: './login.component.html'
})

export class LogInComponent {
  constructor(private user: UserService, private router: Router) {}

  login() {
    let email = (<HTMLInputElement>document.getElementById('inputEmail')).value.toString(),
        password = (<HTMLInputElement>document.getElementById('inputPassword')).value.toString();

    this.router.navigate(['/home']);

    this.user.login(email, password);
  }
}
