import {
  HttpErrorResponse, HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {globalApp} from "../../../data/constants/global.variable.constant";
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidRequestInterceptor implements HttpInterceptor {
  token!: string;
  constructor(
    private authService: AuthService
  ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem(globalApp.tokenKey) || '';
    if (this.token !== '') {
      const header = new HttpHeaders({
        'Authorization': `Bearer ${ this.token }`
      });
      const cloneReq = req.clone({
        headers: header
      });
      return next.handle(cloneReq).pipe(
        catchError( err => {
          if (err.status === 401) {
            this.authService.singOut();
          }
          return this.manageError(err);
        })
      );
    }
    return next.handle(req).pipe(
      catchError( err => this.manageError(err))
    );
  }
  manageError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
