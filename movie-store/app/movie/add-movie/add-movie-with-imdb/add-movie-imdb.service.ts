// IMPORTANT: This service will be fixed later.

import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()

export class AddMovieImdbService {
   constructor(private http: Http) {}

   getMovies(id: string) {
     let url = 'http://imdb.wemakesites.net/api/' + id + '?api_key=83b2cdd9-b220-4525-b732-391d34e47fa6';
     //'http://www.omdbapi.com/?i=' + id + 'plot=short&r=json';

     let movie: any;

    /*return this.jsonp.request(url, { method: 'Get'})
                  .map(mv => movie = mv);*/
      console.log('HERE');


     return this.http.get(url).map(this.extractData);

     //return movie;
   }

   private extractData(res: Response) {
     let body = res.json();

     return body;
   }
}
