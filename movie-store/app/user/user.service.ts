import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()

export class UserService {
  constructor(private af: AngularFire) {}

  createUser(email: any, password: any) {
    this.af.auth.createUser({ email: email, password: password});
  }

  login(email: string, password: string) {
    this.af.auth.login({ email: email, password: password});

    console.log('success');
  }

  logout() {
    this.af.auth.logout();
  }
}
