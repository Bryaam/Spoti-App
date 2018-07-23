import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {  }

  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAtBBz9cp-Ho2VzK2ofg-kJMr1WQOgPEx9mstnZd0B4SolxDCwgAca3sKyzuJeukMlP3hN6C0w-4sTARmU"
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', { headers })
    .subscribe( data => {
      console.log(data);
    });
  }
}
