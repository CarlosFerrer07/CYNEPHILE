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

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  showRegister() {
    this.chooseRegister = true;
  }

  showLogin() {
    this.chooseRegister = false;
  }

  login() {
    let bodyLogin = this.loginForm.value;
    this.securitySvc.login(bodyLogin);
  }

  register() {
    let bodyRegister = this.registerForm.value;

    this.securitySvc.register(bodyRegister);
  }
}
