import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.getReleseases();
    // this.spotifyService.getNewReleases();
  }

  ngOnInit(): void {}

  private async getReleseases() {
    await (await this.spotifyService.getNewReleases()).subscribe(
      (data: any) => {
        this.newReleases = data;
        console.log(this.newReleases);
        this.loading = false;
      }
    );
  }
}
