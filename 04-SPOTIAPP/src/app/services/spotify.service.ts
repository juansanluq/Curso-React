import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { endpoints } from './endpoints';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private CLIENT_ID = 'b4e687457b0c4aae91c17612be213bfc';
  private CLIENT_SECRET = '450787fbf34e4a7689b096960b4655cd';
  private token: string;

  constructor(private http: HttpClient) { }

  private getToken(): Promise<string> {
    return new Promise((resolve) => {
      const body = new HttpParams()
        .set('grant_type', 'client_credentials')
        .set('client_id', this.CLIENT_ID)
        .set('client_secret', this.CLIENT_SECRET);
      return this.http
        .post(endpoints.BASE_URL_API_BACK_ACCOUNT + '/token', body.toString(), {
          headers: new HttpHeaders().set(
            'Content-Type',
            'application/x-www-form-urlencoded'
          ),
        })
        .subscribe((data: any) => {
          resolve(data.access_token);
        });
    });
  }

  public getQuery(query: string) {
    return this.getToken().then((token: string) => {
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token,
      });
      return this.http.get(endpoints.BASE_URL_API_BACK + query, {
        headers,
      });
    });
  }

  public getNewReleases(): Promise<Observable<any>> {
    return this.getQuery('/browse/new-releases').then(
      (obs: Observable<any>) => {
        return obs.pipe(
          map((data: any) => {
            return data.albums.items;
          })
        );
      }
    );
  }

  public getArtist(termino: string): Promise<Observable<any>> {
    return this.getQuery(`/search?q=${termino}&type=artist`).then(
      (obs: Observable<any>) => {
        return obs.pipe(
          map((data: any) => {
            return data.artists.items;
          })
        );
      }
    );
  }

  public getArtistInfo(id: string): Promise<Observable<any>> {
    return this.getQuery(`/artists/${id}`);
  }
}
