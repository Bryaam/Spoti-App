import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean = true;
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService,
               private location: Location ) {
    this.router.params.subscribe( params => {
      this.getArtist(params["id"]);
      // Add promise WIP
      this.getTopTracks(params["id"]);
    });
  }

  ngOnInit() {
  }

  getArtist(id: string){
    this.spotify.getArtist(id).subscribe( artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  goBack(){
    this.location.back();
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id, 'US').subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

}
