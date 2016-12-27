import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { configAngularFire } from '../config/angular-fire.ts';

import { Modules } from './modules';

import { AppComponent } from './app.component';

const configFirebaseAuth = {
  provider: AuthProviders.Password,
  methods: AuthMethods.Password
};

@NgModule({
    imports: [
      BrowserModule,
      AngularFireModule.initializeApp(configAngularFire, configFirebaseAuth),
      Modules
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
