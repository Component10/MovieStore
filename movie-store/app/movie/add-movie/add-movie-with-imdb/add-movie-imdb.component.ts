import { Component, ElementRef } from '@angular/core';

import { AddMovieImdbService } from './add-movie-imdb.service';

declare var $: any;

@Component({
  selector: 'add-movie-imdb',
  templateUrl: './add-movie-imdb.component.html'
})

export class AddMovieImdbComponent {

  constructor(private movie: AddMovieImdbService, private elRef: ElementRef) {}

  show() {
    let id = (<HTMLInputElement>document.getElementById('id')).value.toString();

        $.ajax({
          url: 'http://imdb.wemakesites.net/api/' + id + '?api_key=83b2cdd9-b220-4525-b732-391d34e47fa6',
          crossDomain: true,
          data: {
            api_key: '83b2cdd9-b220-4525-b732-391d34e47fa6'
          },
          dataType: 'jsonp',
          success: function(data: any) {
            console.log(data);
          }
        });
  }
}
