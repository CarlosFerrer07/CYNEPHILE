import { Component } from '@angular/core';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SecurityService } from '../../core/services/security.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgprimeModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private securitySvc: SecurityService,
    private messageService: MessageService
  ) {}

  chooseRegister: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  registerForm = new FormGroup({
    username: new FormControl('', Validators['required']),
    password: new FormControl('', Validators['required']),
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
    if (this.registerForm.valid) {
      this.securitySvc.register(bodyRegister);
      this.registerForm.reset();
      this.chooseRegister = false;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error de registro',
        detail: 'Por favor inserte usuario y contraseña',
      });
    }
  }
}
