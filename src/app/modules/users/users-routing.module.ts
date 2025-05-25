import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUserComponent} from "./pages/list-user/list-user.component";
import {FormUserComponent} from "./pages/form-user/form-user.component";

const routes: Routes = [
  { path: 'list-user', data: { breadcrumb: 'Lista de usuarios' }, component: ListUserComponent },
  { path: 'create-user', data: { breadcrumb: 'Nuevo usuario' }, component: FormUserComponent },
  { path: 'update-user/:id', data: { breadcrumb: 'Actualizar usuario' }, component: FormUserComponent },
  { path: '', redirectTo: 'list-users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
