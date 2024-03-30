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

  public folder: string = 'series';

  ngOnInit(): void {
    this.getSeries();
  }

  public getSeries() {
    this.mediaSvc.getAllSeries().subscribe((series) => {
      this.series = series;
    });
  }
}
