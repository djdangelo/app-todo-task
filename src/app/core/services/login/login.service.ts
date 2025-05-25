import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {globalApp} from "../../../data/constants/global.variable.constant";
import {LoginRequestInterface} from "../../../data/interfaces/login/request/login-request.interface";
import {IResponseApi} from "../../../data/interfaces/response-api/response-api.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }
  login(data: LoginRequestInterface): Observable<IResponseApi> {
    return this.http.post<IResponseApi>(`${globalApp.apiUrl}/auth/login`, data);
  }
}
