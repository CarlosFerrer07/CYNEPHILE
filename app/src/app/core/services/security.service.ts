import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private http: HttpClient, private router: Router) {}

  createUser(body: any) {
    return this.http.post('http://localhost:8000/registro', body).subscribe(
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
      .post('http://localhost:8000/api/login_check  ', body)
      .subscribe(
        (res: any) => {
          if (typeof res.token === 'string') {
            window.localStorage.setItem('token', res.token);
            console.log('Token almacenado:', res.token);
            this.router.navigate(['/init']);
          }
        },
        (error) => {
          console.log('Error al logearte:', error);
        }
      );
  }

  register(body: any) {
    return this.http.post('http://localhost:8000/registro  ', body).subscribe(
      (res: any) => {
        console.log(res);

        this.router.navigate(['/auth']);
      },
      (error) => {
        console.log('Error al insertar usuario:', error);
      }
    );
  }
}
