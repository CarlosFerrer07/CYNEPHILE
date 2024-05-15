import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MediaService } from '../../core/services/media.service';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, NgprimeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private mediaService: MediaService,
    private messageService: MessageService
  ) {}

  visibleSearch: boolean = false;

  dataMedia: any[] = [];

  public userName!: string;
  value!: string;

  public searchForm = new FormGroup({
    busqueda: new FormControl('', Validators['required']),
  });

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

  searchMedia() {
    let search = this.searchForm.get('busqueda')?.value;

    let body = {
      name: search,
    };

    this.mediaService.searchTitle(body).subscribe((res: any) => {
      if (res.length > 0) {
        this.dataMedia = res;
        console.log(this.dataMedia);
        this.visibleSearch = true;
      }
    });

    this.searchForm.reset();
  }
}
