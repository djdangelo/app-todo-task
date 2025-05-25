import { Component } from '@angular/core';
import {Message} from "primeng/api";
import {IUser} from "../../../../data/interfaces/user/user.interface";
import {Router} from "@angular/router";
import {UsersService} from "../../../../data/services/users/users.service";
import {IResponseApi} from "../../../../data/interfaces/response-api/response-api.interface";

@Component({
  selector: 'app-list-user',
  standalone: false,
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  messages!: Message[];
  listUsers: IUser[] = [];
  constructor(
    private router: Router,
    private usersService: UsersService,
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.list().subscribe(
      (res: IResponseApi) => {
        this.listUsers = res.data;
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: error.message +' '+ error.error.message },
        ]
      }
    )
  }
  deleteUser(id: string) {
    this.usersService.delete(id).subscribe(
      (res: IResponseApi) => {
        this.messages = [
          { severity: 'success', detail: res.message },
        ];
        this.getUsers();
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: error.message +' '+ error.error.message },
        ]
      }
    )
  }

  navigateToFormUser() {
    this.router.navigate(['/core/users/create-user']);
  }

  navigateToUpdateUser(id: string) {
    this.router.navigate([`/core/users/update-user/${id}`]);
  }
}
