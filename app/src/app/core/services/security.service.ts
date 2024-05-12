import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  createUser(body: any) {
    return this.http.post(environment.apiUrl + '/registro', body).subscribe(
      (res) => {
        console.log('Éxito al insertar usuario:', res);
      },
      (error) => {
        console.log('Error al insertar usuario:', error);
      }
    );
  }

  login(body: any) {
    return this.http
      .post(environment.apiUrl + '/api/login_check  ', body)
      .subscribe(
        (res: any) => {
          if (typeof res.token === 'string') {
            window.localStorage.setItem('token', res.token);
            this.router.navigate(['/init']);
          }
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error de login',
            detail: 'Usuario o contraseña incorrectos',
          });
        }
      );
  }

  register(body: any) {
    return this.http.post(environment.apiUrl + '/registro  ', body).subscribe(
      (res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Usuario registrado',
          detail: 'Usuario registrado con exito',
        });

        this.router.navigate(['/auth']);
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error de registro',
          detail: 'Por favor inserte usuario y contraseña',
        });
      }
    );
  }
}
