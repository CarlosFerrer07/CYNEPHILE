import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from '../../core/services/media.service';
import { Movies, Serie } from '../../interfaces/media.interface';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { CommentsService } from '../../core/services/comments.service';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  public media!: Movies | Serie;
  public show: boolean = false;
  /* public gmail: string | null = this.getUserName(); */

  constructor(
    private route: ActivatedRoute,
    private mediaSvc: MediaService,
    private comentarioSvc: CommentsService
  ) {}

  comentariosForm = new FormGroup({
    comentario: new FormControl(),
    gmail: new FormControl(),
    idMedia: new FormControl(),
  });

  ngOnInit(): void {
    // Recuperamos la id de la url
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.mediaSvc.getMediaById(Number(id)).subscribe((item) => {
        this.media = item;
      });
    }

    this.comentariosForm.controls['gmail'].setValue(this.getUserName());
    this.comentariosForm.controls['idMedia'].setValue(id);

    this.getUserName();
  }

  onSubmit() {
    let body = this.comentariosForm.value;

    this.comentarioSvc.insertComment(body);
    this.comentariosForm.get('comentario')?.reset();
  }

  getUserName() {
    let token = localStorage.getItem('token');
    if (token) {
      let decodedToken = jwtDecode<{ username: string }>(token);
      let username = decodedToken.username;
      return username;
    } else {
      return null;
    }
  }
}
