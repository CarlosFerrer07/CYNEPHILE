import { Component } from '@angular/core';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { MediaService } from '../../core/services/media.service';
import { Movies } from '../../interfaces/media.interface';
import { CardComponent } from '../../components/card/card.component';
import { PageEvent } from '../../interfaces/page.interface';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgprimeModule, CardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  constructor(private mediaSvc: MediaService) {}

  public movies: Movies[] = [];
  public paginatedMovies: Movies[] = [];

  // Para la paginación
  public totalRecords: number = 0;
  public first: number = 0;
  public objectsPerPage: number = 8;

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies() {
    this.mediaSvc.getAllMovies().subscribe((movies) => {
      this.movies = movies;
      this.totalRecords = this.movies.length;
      this.paginateMovies();
    });
  }

  public onPageChange(event: any) {
    this.first = event.first;
    this.objectsPerPage = event.rows;
    this.paginateMovies();
  }

  private paginateMovies() {
    this.paginatedMovies = this.movies.slice(
      this.first,
      this.first + this.objectsPerPage
    );
  }
}
