import { Component } from '@angular/core';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { MediaService } from '../../core/services/media.service';
import { Movies } from '../../interfaces/media.interface';
import { CardComponent } from '../../components/card/card.component';

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
  public folder: string = 'peliculas';

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies() {
    this.mediaSvc.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
