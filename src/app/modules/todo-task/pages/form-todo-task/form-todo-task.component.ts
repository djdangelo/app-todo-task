import { Component } from '@angular/core';
import {Message} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TasksService} from "../../../../data/services/tasks/tasks.service";
import {IResponseApi} from "../../../../data/interfaces/response-api/response-api.interface";
import {ITask} from "../../../../data/interfaces/task/task.interface";

@Component({
  selector: 'app-form-todo-task',
  standalone: false,
  templateUrl: './form-todo-task.component.html',
  styleUrl: './form-todo-task.component.scss'
})
export class FormTodoTaskComponent {
  action: string[] = ['Create todo-task', 'Update todo-task'];
  status: object[] = [];
  messages!: Message[];

  formTask!: FormGroup;

  btnSave = false;

  id: string = '';
  index: number = 0;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private taskService: TasksService
  ) {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = params.get('id') || '';
    });
    if (this.id !== '') {
      this.getTask();
    }
  }

  ngOnInit() {
    this.status = [
      { name: 'Pendiente', value: false },
      { name: 'Completado', value: true },
    ];
    this.formTask = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
    })
  }

  saveTask(data: ITask) {
    if (this.index === 0) {
      this.taskService.create(data).subscribe(
        (res: IResponseApi) => {
          this.messages = [
            { severity: 'success', detail: res.message },
          ]
          this.formTask.reset();
        },
        error => {
          console.log(error);
          this.messages = [
            { severity: 'error', detail: error.message +' '+ error.error.message },
          ]
        }
      )
    }
    if (this.index === 1) {
      data.id = this.id;
      this.taskService.update(data).subscribe(
        (res: IResponseApi) => {
          this.messages = [
            { severity: 'success', detail: res.message },
          ]
          this.formTask.reset();
        },
        error => {
          console.log(error);
          this.messages = [
            { severity: 'error', detail: error.message +' '+ error.error.message },
          ]
        }
      )
    }
  }

  getTask() {
    if (this.id !== '') {
      this.index = 1;
      this.taskService.listOne(this.id).subscribe(
        (res: IResponseApi) => {
          this.formTask.controls['title'].setValue(res.data.title);
          this.formTask.controls['description'].setValue(res.data.description);
        },
        error => {
          console.log(error);
          this.messages = [
            { severity: 'error', detail: error.message +' '+ error.error.message },
          ]
        }
      );
    }
  }
}
