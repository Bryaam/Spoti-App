import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQB08dscgk7eJi6vW6Y6dR_XaOtVrXLyBCAFa6ygpF8rBdbtShVVmPKw1aGlNLEfCe_dw0j3Qchvnccex3I"
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items ));
  }

  getArtists(query: string){
    return this.getQuery(`search?q=${ query }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items ));
  }

  getArtist(id: string){
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string, countryCode: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=${ countryCode }`)
      .pipe( map( data => data['tracks']));
  }

}
