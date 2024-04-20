import { Component } from '@angular/core';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { SecurityService } from '../../core/services/security.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgprimeModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private securitySvc: SecurityService) {}

  chooseRegister: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  showRegister() {
    this.chooseRegister = true;
  }

  login() {
    console.log(this.loginForm.value);
    let bodyLogin = this.loginForm.value;
    this.securitySvc.login(bodyLogin);
  }
}
