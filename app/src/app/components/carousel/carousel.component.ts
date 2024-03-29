import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { Movies } from '../../interfaces/media.interface';
import { Serie } from '../../interfaces/media.interface';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgprimeModule, NgStyle],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() media: Movies[] | Serie[] = [];
  @Input() type: string = '';
  @Input() folder: string = '';
}
