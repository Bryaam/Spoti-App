import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {  }

  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBE8vkKn5mYwfe95gpRA_RCOx81sxlIxL_Mj8LPb7u3_pGmQqwGiydjFY6rf3IQ2VPhYHMKAthSPKzDXg0"
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe( map( data => data['albums'].items ));
  }

  getArtist(query: string){
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBE8vkKn5mYwfe95gpRA_RCOx81sxlIxL_Mj8LPb7u3_pGmQqwGiydjFY6rf3IQ2VPhYHMKAthSPKzDXg0"
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ query }&type=artist&limit=15`, { headers })
      .pipe( map( data => data['artists'].items ));
  }
}
