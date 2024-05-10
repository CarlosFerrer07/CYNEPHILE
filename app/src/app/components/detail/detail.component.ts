import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from '../../core/services/media.service';
import { Movies, Serie } from '../../interfaces/media.interface';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { CommentsService } from '../../core/services/comments.service';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ReactiveFormsModule, NgprimeModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  public media!: Movies | Serie;
  public urlId: any = this.route.snapshot.paramMap.get('id');
  public show: boolean = false;
  public comments: any[] = [];
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
    if (this.urlId !== null) {
      this.mediaSvc.getMediaById(Number(this.urlId)).subscribe((item) => {
        this.media = item;
      });
    }

    this.comentariosForm.controls['gmail'].setValue(this.getUserName());
    this.comentariosForm.controls['idMedia'].setValue(this.urlId);

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

  getComments(id: any) {
    this.comentarioSvc.getComments(id).subscribe((comments) => {
      console.log(comments);
    });
  }
}
