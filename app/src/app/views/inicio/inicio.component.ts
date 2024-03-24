import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../core/services/media.service';
import { Movies, Serie } from '../../interfaces/media.interface';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  constructor(private mediaSvc: MediaService) {}

  public limit: number = 4;

  public dataMovies: Movies[] = [];
  public dataSeries: Serie[] = [];

  public moviesToShow: Movies[] = [];
  public seriesToShow: Serie[] = [];

  public startMovies: number = 0;
  public startSeries: number = 0;

  ngOnInit(): void {
    this.getDataMovies();
    this.getDataSeries();
  }

  public getDataMovies() {
    this.mediaSvc.getAllMovies().subscribe((movies) => {
      this.dataMovies = movies;
      this.renderMovies();
    });
  }

  public getDataSeries() {
    this.mediaSvc.getAllSeries().subscribe((series) => {
      this.dataSeries = series;
      this.renderSeries();
    });
  }

  public renderMovies() {
    this.moviesToShow = this.dataMovies.slice(this.startMovies, this.startMovies + this.limit);
  }

  public renderSeries() {
    this.seriesToShow = this.dataSeries.slice(this.startSeries, this.startSeries + this.limit);
  }

  public onForwardMovies() {
    this.startMovies = (this.startMovies + this.limit) % this.dataMovies.length;
    this.renderMovies();
  }

  public onBackMovies() {
    this.startMovies -= this.limit;
    this.startMovies = (this.startMovies - this.limit + this.dataMovies.length) % this.dataMovies.length;
    this.renderMovies();
  }

  public onForwardSeries() {
    this.startSeries = (this.startSeries + this.limit) % this.dataSeries.length;
    this.renderSeries();
  }

  public onBackSeries() {
    this.startSeries -= this.limit;
    this.startSeries = (this.startSeries - this.limit + this.dataSeries.length) % this.dataSeries.length;
    this.renderSeries();
  }
}

