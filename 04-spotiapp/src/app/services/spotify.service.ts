import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery( query: string )
  {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAO9YIRl17QqX2XatAI3uNQhr7vPIPp9XyQmvvvjFpoT34iunS6Ly2Xgn88PKJoje6OHtMB5llBfwKbCGg'
    })

    return this.http.get(url, {headers});
  }

  getNewReleases(){

   return this.getQuery('browse/new-releases')
              .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string)
  {
   return this.getQuery(`search?q=${ termino }&type=artist`)
              .pipe(map(data => data['artists'].items)); 
  }
}

