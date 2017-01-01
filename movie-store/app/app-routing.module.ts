import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { AddMovieImdbComponent } from './movie/add-movie/add-movie-with-imdb/add-movie-imdb.component';

const routes: Routes =  [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'top-movies', component: TopMoviesComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'add-movie-with-imdb', component: AddMovieImdbComponent },
  { path: 'genres', loadChildren: 'app/genres/genres.module#GenresModule' }
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
