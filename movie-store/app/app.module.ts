import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { LogInModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { SignUpModule } from './sign-up/sign-up.module';

import { AppComponent } from './app.component';

import { AppService } from './app.service';

let configAngularFire = {
  apiKey: "AIzaSyDCoA_NcabnK4Bshd-7lNOiltrhi4JKS6k",
  authDomain: "moviestore-6d068.firebaseapp.com",
  databaseURL: "https://moviestore-6d068.firebaseio.com",
  storageBucket: "moviestore-6d068.appspot.com"
};

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(configAngularFire),
      SignUpModule,
      LogInModule
    ],
    declarations: [AppComponent],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
