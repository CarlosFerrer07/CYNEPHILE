import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  public userName!: string;

  ngOnInit() {
    this.getUserName();
  }

  logOut() {
    localStorage.removeItem('token');

    this.router.navigateByUrl('/auth');
  }

  getUserName() {
    let token = localStorage.getItem('token');
    if (token) {
      let decodedToken = jwtDecode<{ username: string }>(token);
      let username = decodedToken.username;
      username = username.split('@')[0].toLocaleUpperCase();
      this.userName = 'Hola ' + username;
    }
  }
}
