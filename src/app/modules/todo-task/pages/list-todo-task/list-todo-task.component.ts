import { Component } from '@angular/core';
import {Message} from "primeng/api";
import {Router} from "@angular/router";
import {SharedService} from "../../../../data/services/shared/shared.service";
import {PaginatorState} from "primeng/paginator";

@Component({
  selector: 'app-list-todo-task',
  standalone: false,
  templateUrl: './list-todo-task.component.html',
  styleUrl: './list-todo-task.component.scss'
})
export class ListTodoTaskComponent {
  messages!: Message[];
  first: number = 0;

  rows2: number = 10;

  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 }
  ];
  constructor(
    private router: Router,
    public sharedService: SharedService,
  ) {
  }
  ngOnInit() {
    this.sharedService.getTasks();
  }
  addNewTask() {
    this.router.navigate(['/core/tasks/create-task']);
  }
  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    console.log(event.first, event.rows);
    if (this.first === 0) {
      this.first = event.rows || 0;
    }
    this.sharedService.getTasks(this.first);
  }
}
