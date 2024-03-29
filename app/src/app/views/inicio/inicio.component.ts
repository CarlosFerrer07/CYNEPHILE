import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../core/services/media.service';
import { Movies, Serie } from '../../interfaces/media.interface';
import { BannerComponent } from '../../components/banner/banner.component';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BannerComponent, NgprimeModule, CarouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent implements OnInit {
  constructor(private mediaSvc: MediaService) {}

  public movies: Movies[] = [];

  ngOnInit(): void {
    this.getAllMovies();
  }

  public getAllMovies() {
    this.mediaSvc.getAllMovies().subscribe((moviesData) => {
      this.movies = moviesData;
    });
  }
}
