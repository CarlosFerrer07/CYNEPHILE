import { Component, Input } from '@angular/core';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { Movies, Serie } from '../../interfaces/media.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgprimeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item!: Movies | Serie;
  @Input() folder!: string;
}
