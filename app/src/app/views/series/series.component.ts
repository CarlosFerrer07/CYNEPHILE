import { Component } from '@angular/core';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { MediaService } from '../../core/services/media.service';
import { Serie } from '../../interfaces/media.interface';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [NgprimeModule, CardComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss',
})
export class SeriesComponent {
  constructor(private mediaSvc: MediaService) {}

  public series: Serie[] = [];
  public paginatedSeries: Serie[] = [];
  // Para la paginación
  public totalRecords: number = 0;
  public first: number = 0;
  public rows: number = 4;

  public folder: string = 'series';

  ngOnInit(): void {
    this.getSeries();
  }

  public getSeries() {
    this.mediaSvc.getAllSeries().subscribe((series) => {
      this.series = series;
      this.totalRecords = this.series.length;
      this.paginateSeries();
    });
  }

  public onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.paginateSeries();
  }

  private paginateSeries() {
    this.paginatedSeries = this.series.slice(
      this.first,
      this.first + this.rows
    );
  }
}
