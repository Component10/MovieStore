import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { configAngularFire } from '../config/angular-fire.ts';

import { LogInModule } from './user/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { SignUpModule } from './user/sign-up/sign-up.module';
import { TopMoviesModule } from './top-movies/top-movies.module';

import { AppComponent } from './app.component';

import { AppService } from './app.service';

const configFirebaseAuth = {
  provider: AuthProviders.Password,
  methods: AuthMethods.Password
};

@NgModule({
    imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(configAngularFire, configFirebaseAuth),
      SignUpModule,
      LogInModule,
      TopMoviesModule
    ],
    declarations: [AppComponent],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
