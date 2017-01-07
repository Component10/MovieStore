import { Component } from '@angular/core';

import { GenresService } from '../genres.service';

@Component({
  selector: 'animation-genre',
  templateUrl: 'animation.component.html'
})

export class AnimationComponent {
  animationMovies: any[];

  constructor(private genresService: GenresService) {
    this.animationMovies = this.genresService.getSpecificMovies('Animation');
  }
}
