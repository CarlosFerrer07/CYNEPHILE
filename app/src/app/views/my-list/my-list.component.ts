import { Component, OnInit } from '@angular/core';
import { Movies, Serie } from '../../interfaces/media.interface';
import { FavouriteCardComponent } from '../../components/favourite-card/favourite-card.component';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [FavouriteCardComponent],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss',
})
export class MyListComponent implements OnInit {
  public media: (Movies | Serie)[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getMedia();
  }

  getMedia() {
    Object.keys(localStorage).map((key) => {
      const serializedMedia = localStorage.getItem(key);
      if (serializedMedia) {
        const media = JSON.parse(serializedMedia);
        this.media.push(media);
        console.log(this.media);
      } else {
        console.log('No se han encontrado peliculas en favoritos');
      }
    });
  }
}
