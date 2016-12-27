import { Component } from '@angular/core';

import { UserService } from './user/user.service';

@Component({
    selector: 'mvdb-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
  isLogged: boolean;

  constructor(private user: UserService) {
    this.isLogged = this.user.isLogged();

    console.log(this.isLogged);
  }

  CheckIfItIsLogged(): any {
    return this.user.isLogged();
  }

  logout() {
    this.user.logout();
  }

}
