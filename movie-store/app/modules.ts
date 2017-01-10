import { LogInModule } from './user/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { SignUpModule } from './user/sign-up/sign-up.module';
import { TopMoviesModule } from './top-movies/top-movies.module';
import { HomeModule } from './home/home.module';
import { AddMovieModule } from './movie/add-movie/add-movie.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { GenresModule } from './genres/genres.module';
import { SearcherModule } from './searcher/searcher.module';

export const Modules = [
      LogInModule,
      AppRoutingModule,
      SignUpModule,
      TopMoviesModule,
      HomeModule,
      AddMovieModule,
      HttpModule,
      JsonpModule,
      GenresModule,
      SearcherModule
];
