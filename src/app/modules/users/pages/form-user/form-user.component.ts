import { Component } from '@angular/core';
import {Message} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../../data/services/users/users.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {IUser} from "../../../../data/interfaces/user/user.interface";
import {IResponseApi} from "../../../../data/interfaces/response-api/response-api.interface";

@Component({
  selector: 'app-form-user',
  standalone: false,
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss'
})
export class FormUserComponent {
  action: string[] = ['Create user', 'Update user'];
  messages!: Message[];

  formUser!: FormGroup;

  btnSave = false;

  id: string = '';
  index: number = 0;

  constructor(
    public formBuilder: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute,
    ) {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = params.get('id') || '';
    });
    if (this.id !== '') {
      this.getUser();
    }
  }
  ngOnInit() {
    this.formUser = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  saveUser(data: IUser) {
    if (this.index === 0) {
      this.usersService.create(data).subscribe(
        (res: IResponseApi) => {
          this.messages = [
            { severity: 'success', detail: res.message },
          ]
          this.formUser.reset();
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
      this.usersService.update(data).subscribe(
        (res: IResponseApi) => {
          this.messages = [
            { severity: 'success', detail: res.message },
          ]
          this.formUser.reset();
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
  getUser() {
    if (this.id !== '') {
      this.index = 1;
      this.usersService.listOne(this.id).subscribe(
        (res: IResponseApi) => {
          let email = res.data.email;
          this.formUser.controls['email'].setValue(email);
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
}
