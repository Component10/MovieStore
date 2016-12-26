import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';

const routes: Routes =  [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'howe', component: AppComponent },
  { path: 'login', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'top-movies', component: TopMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routableComponents =  [
  LogInComponent,
  SignUpComponent
]
