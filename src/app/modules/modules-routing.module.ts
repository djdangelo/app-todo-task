import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "../layout/app.layout.component";

const routes: Routes = [
  { path: '', component: AppLayoutComponent,
  children: [
    { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'tasks', data: { breadcrumb: 'todo-tasks'}, loadChildren: () => import('./todo-task/todo-task.module').then(m => m.TodoTaskModule) },
    { path: 'users', data: { breadcrumb: 'Usuarios' }, loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
