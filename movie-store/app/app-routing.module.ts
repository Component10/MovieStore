import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { AddMovieImdbComponent } from './movie/add-movie/add-movie-with-imdb/add-movie-imdb.component';
import { ActionComponent } from './genres/action/action.component';
import { AdventureComponent } from './genres/adventure/adventure.component';
import { AnimationComponent } from './genres/animation/animation.component';
import { ComedyComponent } from './genres/comedy/comedy.component';
import { CrimeComponent } from './genres/crime/crime.component';

const routes: Routes =  [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'top-movies', component: TopMoviesComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'add-movie-from-imdb', component: AddMovieImdbComponent },
  { path: 'genres/action', component: ActionComponent },
  { path: 'genres/adventure', component: AdventureComponent },
  { path: 'genres/animation', component: AnimationComponent },
  { path: 'genres/comedy', component: ComedyComponent },
  { path: 'genres/crime', component: CrimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routableComponents =  [
  LogInComponent,
  SignUpComponent
];
