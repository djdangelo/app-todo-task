import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IResponseApi} from "../../interfaces/response-api/response-api.interface";
import {Observable} from "rxjs";
import {ITask} from "../../interfaces/task/task.interface";
import {globalApp} from "../../constants/global.variable.constant";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient,
  ) { }
  create(data: ITask): Observable<IResponseApi> {
    return this.http.post<IResponseApi>(`${globalApp.apiUrl}/task/create`, data);
  }
  update(data: ITask): Observable<IResponseApi> {
    return this.http.put<IResponseApi>(`${globalApp.apiUrl}/task/update`, data);
  }
  listOne(id: string): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(`${globalApp.apiUrl}/task/get-by-id/${id}`);
  }
  delete(id: string): Observable<IResponseApi> {
    return this.http.delete<IResponseApi>(`${globalApp.apiUrl}/task/delete/${id}`);
  }
  list(limit: number = 10, id?: string): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(`${globalApp.apiUrl}/task/get-all?limit=${limit}&pageToken=${id}`);
  }
}
