import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies, Serie } from '../../interfaces/media.interface';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  public getAllMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://localhost:8000/getAllMovies');
  }

  public getAllSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>('http://localhost:8000/getAllSeries');
  }

  public getMediaById(id: number): Observable<Serie | Movies> {
    return this.http.get<Serie | Movies>(
      'http://localhost:8000/getMediaById/' + id
    );
  }
}
