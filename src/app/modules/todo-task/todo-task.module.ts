import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoTaskRoutingModule } from './todo-task-routing.module';
import {FormTodoTaskComponent} from "./pages/form-todo-task/form-todo-task.component";
import {ListTodoTaskComponent} from "./pages/list-todo-task/list-todo-task.component";
import {MessagesModule} from "primeng/messages";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {ToggleButtonModule} from "primeng/togglebutton";
import {RippleModule} from "primeng/ripple";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {ProgressBarModule} from "primeng/progressbar";
import {DialogModule} from "primeng/dialog";
import {PipesCustomsModule} from "../../data/pipes/pipes-customs.module";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InplaceModule} from "primeng/inplace";
import {MenuModule} from "primeng/menu";
import {TaskDetailComponent} from "./components/task-detail/task-detail.component";
import {CheckboxModule} from "primeng/checkbox";


@NgModule({
  declarations: [
    FormTodoTaskComponent,
    ListTodoTaskComponent,
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    TodoTaskRoutingModule,
    MessagesModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ReactiveFormsModule,
    DialogModule, PipesCustomsModule, InputTextareaModule, InplaceModule, MenuModule, CheckboxModule,
  ]
})
export class TodoTaskModule { }
