import { Injectable } from '@angular/core';
import {ITask} from "../../interfaces/task/task.interface";
import {TasksService} from "../tasks/tasks.service";
import {IResponseApi} from "../../interfaces/response-api/response-api.interface";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  listTasks: ITask[] = [];

  todoTask: ITask[] = [];

  completedTask: ITask[] = [];

  size: number = 0;
  pageToken: string = '';

  constructor(
    private taskService: TasksService
  ) { }

  getTasks(limit?: number, pageToken?: string) {
    this.taskService.list(limit, pageToken).subscribe(
      (res: IResponseApi) => {
        this.listTasks = res.data.tasks;
        this.categorize(this.listTasks);
        this.size = res.data.size;
        this.pageToken = res.data.nextPage;
      },
      error => {
        console.log(error);
      }
    )
  }

  categorize(tasks: ITask[]) {
    this.todoTask = tasks.filter(t => !t.status);
    this.completedTask = tasks.filter(t => t.status);
  }
}
