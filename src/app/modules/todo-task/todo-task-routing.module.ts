import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTodoTaskComponent} from "./pages/list-todo-task/list-todo-task.component";
import {FormTodoTaskComponent} from "./pages/form-todo-task/form-todo-task.component";

const routes: Routes = [
  { path: 'list-tasks', data: { breadcrumb: 'Lista de tareas' }, component: ListTodoTaskComponent },
  { path: 'create-task', data: { breadcrumb: 'Nueva tarea' }, component: FormTodoTaskComponent },
  { path: 'update-task/:id', data: { breadcrumb: 'Actualizar tarea' }, component: FormTodoTaskComponent },
  { path: '', redirectTo: 'list-tasks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoTaskRoutingModule { }
