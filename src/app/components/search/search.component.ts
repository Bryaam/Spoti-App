import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  search(query: string){
    this.loading = true;
    this.spotify.getArtists(query)
      .subscribe( (data: any) => {
        this.artists = data;
        this.loading = false;
      });
  }
}
