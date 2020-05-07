import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading = false;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.spotifyService.getArtistInfo(params.id).then((obs: Observable<any>) => {
        obs.subscribe((data: any) => {
          console.log(data);
          this.artista = data;
          this.loading = false;
        });
      });
    });
  }

}
