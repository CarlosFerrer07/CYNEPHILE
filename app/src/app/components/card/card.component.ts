import { Component, Input, OnInit } from '@angular/core';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { Movies, Serie } from '../../interfaces/media.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgprimeModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item!: Movies | Serie;
  @Input() folder!: string;
}
