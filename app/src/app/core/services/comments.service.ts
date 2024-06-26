import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  insertComment(body: any) {
    return this.http.post(environment.apiUrl + '/comentarios', body).subscribe(
      (res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Comentario insertado con éxito',
        });
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error de inserción',
          detail: 'Error al insertar usuario',
        });
      }
    );
  }

  getComments(id: number) {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(environment.apiUrl + `/api/getCommentById`, {
      params: params,
    });
  }
}
