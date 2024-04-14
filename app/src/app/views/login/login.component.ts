import { Component } from '@angular/core';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgprimeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
