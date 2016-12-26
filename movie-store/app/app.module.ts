import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { configAngularFire } from '../config/angular-fire.ts';

import { LogInModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { TopMoviesModule } from './top-movies/top-movies.module';

import { AppComponent } from './app.component';

import { AppService } from './app.service';

@NgModule({
    imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(configAngularFire),
      SignUpModule,
      LogInModule,
      TopMoviesModule
    ],
    declarations: [AppComponent],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
