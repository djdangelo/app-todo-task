import { Component } from '@angular/core';
import {globalApp} from "../../../../data/constants/global.variable.constant";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";
import {LayoutService} from "../../../../layout/service/app.layout.service";
import {Router} from "@angular/router";
import {LoginRequestInterface} from "../../../../data/interfaces/login/request/login-request.interface";
import {LoginService} from "../../../services/login/login.service";
import {IResponseApi} from "../../../../data/interfaces/response-api/response-api.interface";

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  appName = globalApp.nameApp;
  formAuth!: FormGroup;
  btnLoginDisabled = false;
  messages!: Message[];
  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {
    this.formAuth = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get filledInput(): boolean {
    return this.layoutService.config().inputStyle === 'filled';
  }
  login(data: LoginRequestInterface): void {
    this.loginService.login(data).subscribe(
      (res: IResponseApi) => {
        console.log(res);
        localStorage.setItem(globalApp.tokenKey, res.data.token);
        localStorage.setItem('userEmail', res.data.email);
        localStorage.setItem('userName', res.data.email.split('@')[0]);
        this.formAuth.reset();
        this.router.navigate(['core']);
      },
      error => {
        console.error(error);
        this.messages = [
          { severity: 'error', detail: error.message +' '+ error.error.message },
        ]
      }
    )
  }
}
