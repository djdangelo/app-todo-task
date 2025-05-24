import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./pages/login/login.component";
import {MessagesModule} from "primeng/messages";
import {ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {AppConfigModule} from "../../layout/config/config.module";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppConfigModule,
    ButtonModule,
    RouterModule,
    InputTextModule,
    RippleModule,
    ReactiveFormsModule,
    MessagesModule,
  ]
})
export class AuthModule { }
