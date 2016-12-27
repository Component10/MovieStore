import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuth, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()

export class UserService {
  constructor(private af: AngularFire, private auth: FirebaseAuth) {}

  createUser(email: any, password: any) {
    this.af.auth.createUser({ email: email, password: password});
  }

  login(email: any, password: any) {

    console.log('Email : ' + email);
    console.log('Password : ' + password);

    this.af.auth.login({ email: email, password: password}, { provider: AuthProviders.Password, method: AuthMethods.Password });

    console.log('success');
  }

  logout() {
    this.af.auth.logout();
  }
}
