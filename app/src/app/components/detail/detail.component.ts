import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from '../../core/services/media.service';
import { Movies, Serie } from '../../interfaces/media.interface';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { CommentsService } from '../../core/services/comments.service';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { Comment } from '../../interfaces/coment.interface';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
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
  public comments: Comment[] = [];
  public visible: boolean = false;
  /* public gmail: string | null = this.getUserName(); */

  constructor(
    private route: ActivatedRoute,
    private mediaSvc: MediaService,
    private comentarioSvc: CommentsService,
    private messageService: MessageService,
    private location: Location
  ) {}

  comentariosForm = new FormGroup({
    comentario: new FormControl('', Validators['required']),
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

  checkForm(): any {
    const comentarioControl = this.comentariosForm.get('comentario');
    const result =
      comentarioControl?.value && comentarioControl.value.trim().length > 0;
    // Si hay valor y si contiene algún carácter no espaciado devolvemos true y en el html lo negamos para habilitarlo
    return result;
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
    this.comments = [];
    this.comentarioSvc.getComments(id).subscribe((comments: any) => {
      if (comments.length > 0) {
        this.visible = true;
        this.comments = comments;
      } else {
        this.messageService.add({
          severity: 'info',
          summary: 'No hay comentarios, sea el primero en insertar!!!',
        });
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
