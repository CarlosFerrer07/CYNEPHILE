import { Component, Input, Output } from '@angular/core';
import { Movies } from '../../interfaces/media.interface';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgprimeModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() media: Movies[] = [];
  @Input() type: string = '';
}
