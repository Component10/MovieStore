import { Component } from '@angular/core';

import { UserService } from './user/user.service';

@Component({
    selector: 'mvdb-app',
    templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(private user: UserService) {  }

  CheckIfItIsLogged(): any {
    return this.user.isLogged();
  }

  logout() {
    this.user.logout();
  }

}
