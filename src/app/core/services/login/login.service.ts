import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {globalApp} from "../../../data/constants/global.variable.constant";
import {LoginRequestInterface} from "../../../data/interfaces/login/request/login-request.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }
  login(data: LoginRequestInterface) {
    return this.http.post(`${globalApp.apiUrl}/Auth/login`, data);
  }
}
