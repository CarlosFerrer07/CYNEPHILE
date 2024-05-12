import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies, Serie } from '../../interfaces/media.interface';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  public getAllMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(environment.apiUrl + '/api/getAllMovies');
  }

  public getAllSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(environment.apiUrl + '/api/getAllSeries');
  }

  public getMediaById(id: number): Observable<Serie | Movies> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<Serie | Movies>(
      environment.apiUrl + `/api/getMediaById`,
      { params: params }
    );
  }
}
