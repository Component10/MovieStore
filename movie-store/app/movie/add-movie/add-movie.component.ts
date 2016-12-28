import { Component } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html'
})

export class AddMovieComponent {

  constructor(private movie: MovieService) {}

  add() {
    let title = (<HTMLInputElement>document.getElementById('title')).value.toString(),
        poster = (<HTMLInputElement>document.getElementById('image')).value.toString(),
        released = (<HTMLInputElement>document.getElementById('date')).value.toString(),
        actors = (<HTMLInputElement>document.getElementById('actors')).value.toString(),
        genre = (<HTMLInputElement>document.getElementById('genre')).value.toString(),
        runtime = (<HTMLInputElement>document.getElementById('runtime')).value.toString();

    let movie = {
      Title: title,
      Poster: poster,
      Released: released,
      Actors: actors,
      Genres: genre,
      Runtime: runtime
    };

    this.movie.addMovie(movie);
  }
}
