import { Component } from '@angular/core';
import {Message} from "primeng/api";
import {Router} from "@angular/router";
import {TasksService} from "../../../../data/services/tasks/tasks.service";

@Component({
  selector: 'app-list-todo-task',
  standalone: false,
  templateUrl: './list-todo-task.component.html',
  styleUrl: './list-todo-task.component.scss'
})
export class ListTodoTaskComponent {
  messages!: Message[];

  constructor(
    private router: Router,
    private taskService: TasksService
  ) {
  }

  addNewTask() {
    this.router.navigate(['/core/tasks/create-task']);
  }
}
