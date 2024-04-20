import { Component, OnInit } from '@angular/core';
import { Movies, Serie } from '../../interfaces/media.interface';
import { FavouriteCardComponent } from '../../components/favourite-card/favourite-card.component';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [FavouriteCardComponent, NgprimeModule, RouterLink],
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
    this.media = [];

    Object.keys(localStorage).map((key) => {
      if (key !== 'token') {
        const serializedMedia = localStorage.getItem(key);
        if (serializedMedia) {
          const media = JSON.parse(serializedMedia);
          this.media.push(media);
          console.log(this.media);
        } else {
          console.log('No se han encontrado peliculas en favoritos');
        }
      }
    });
  }

  onDeleteFavourite(title: string) {
    localStorage.removeItem(title);
    this.getMedia();
  }
}
