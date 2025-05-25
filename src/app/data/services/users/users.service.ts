import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../interfaces/user/user.interface";
import {IResponseApi} from "../../interfaces/response-api/response-api.interface";
import {globalApp} from "../../constants/global.variable.constant";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }
  create(user: IUser): Observable<IResponseApi> {
    return this.http.post<IResponseApi>(`${globalApp.apiUrl}/users/create`, user);
  }
  list(): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(`${globalApp.apiUrl}/users/get-all`);
  }
  update(user: IUser): Observable<IResponseApi> {
    return this.http.put<IResponseApi>(`${globalApp.apiUrl}/users/update`, user);
  }
  delete(id: string): Observable<IResponseApi> {
    return this.http.delete<IResponseApi>(`${globalApp.apiUrl}/users/delete/${id}`);
  }
  listOne(id: string): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(`${globalApp.apiUrl}/users/get-by-id/${id}`);
  }
}
