import { Component } from '@angular/core';
import {Message} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

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
  ) {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = params.get('id') || '';
    });
    if (this.id !== '') {
      null;
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

  saveTask(data:any) {

  }
}
