import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  public search(termino: string) {
    this.loading = true;
    this.spotifyService.getArtist(termino).then((obs: Observable<any>) => {
      obs.subscribe((data: any) => {
        this.artists = data;
        console.log(this.artists);
        this.loading = false;
      });
    });
  }
}
