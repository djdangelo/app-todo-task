import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {FormUserComponent} from "./pages/form-user/form-user.component";
import {ListUserComponent} from "./pages/list-user/list-user.component";
import {MessagesModule} from "primeng/messages";
import {TableModule} from "primeng/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {ToggleButtonModule} from "primeng/togglebutton";
import {RippleModule} from "primeng/ripple";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {InputTextareaModule} from "primeng/inputtextarea";


@NgModule({
  declarations: [
    FormUserComponent,
    ListUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MessagesModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextareaModule,
  ]
})
export class UsersModule { }
