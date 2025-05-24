import { Component } from '@angular/core';
import {globalApp} from "../../../../data/constants/global.variable.constant";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";
import {LayoutService} from "../../../../layout/service/app.layout.service";
import {Router} from "@angular/router";

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
  ) {
    this.formAuth = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get filledInput(): boolean {
    return this.layoutService.config().inputStyle === 'filled';
  }
  login(data: any): void {

  }
}
