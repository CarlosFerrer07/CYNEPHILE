import { Component, Input } from '@angular/core';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { Movies, Serie } from '../../interfaces/media.interface';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite-card',
  standalone: true,
  imports: [NgprimeModule],
  templateUrl: './favourite-card.component.html',
  styleUrl: './favourite-card.component.scss',
})
export class FavouriteCardComponent {
  @Input() item!: Movies | Serie;
  @Output() remove = new EventEmitter<string>();

  constructor() {}

  onDeleteFavourite(title: string) {
    /* localStorage.removeItem(title); */
    /* window.location.reload(); */
    this.remove.emit(title);
  }
}
