import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Movies, Serie } from '../../interfaces/media.interface';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss',
})
export class MyListComponent implements OnInit {
  public media: (Movies | Serie)[] = [];

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
