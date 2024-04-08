import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from '../../core/services/media.service';
import { Movies, Serie } from '../../interfaces/media.interface';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  public media!: Movies | Serie;

  constructor(private route: ActivatedRoute, private mediaSvc: MediaService) {}

  ngOnInit(): void {
    // Recuperamos la id de la url
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.mediaSvc.getMediaById(Number(id)).subscribe((item) => {
        this.media = item;
        console.log(this.media);
      });
    }
  }
}
