import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusTaskPipe} from "./status-task/status-task.pipe";



@NgModule({
  declarations: [
    StatusTaskPipe
  ],
  imports: [
  ],
  exports: [
    StatusTaskPipe
  ]
})
export class PipesCustomsModule { }
