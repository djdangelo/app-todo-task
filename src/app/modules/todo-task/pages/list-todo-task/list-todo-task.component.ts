import { Component } from '@angular/core';
import {Message} from "primeng/api";

@Component({
  selector: 'app-list-todo-task',
  standalone: false,
  templateUrl: './list-todo-task.component.html',
  styleUrl: './list-todo-task.component.scss'
})
export class ListTodoTaskComponent {
  messages!: Message[];

  constructor() {
  }
}
