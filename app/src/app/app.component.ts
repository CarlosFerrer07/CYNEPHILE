import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Router, NavigationEnd } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SpinnerComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
  showNavigationBar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.showNavigationBar = this.router.url !== '/auth';
    this.router.events.subscribe(() => {
      this.showNavigationBar = this.router.url !== '/auth';
    });
  }
}
