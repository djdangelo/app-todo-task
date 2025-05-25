import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {globalApp} from "../../../data/constants/global.variable.constant";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private routes: Router
  ) { }
  singOut() {
    localStorage.removeItem(globalApp.tokenKey);
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    this.routes.navigate(['/auth']);
  }
  validateToken(token: string) : boolean {
    const jwt = new JwtHelperService();
    if (token !== null) {
      try {
        if (jwt.isTokenExpired(token)) {
          localStorage.removeItem(globalApp.tokenKey);
          return false;
        }
        if (jwt.decodeToken(token)) {
          return true;
        }
      } catch (exception) {
        localStorage.removeItem(globalApp.tokenKey);
        return false;
      }
    }
    return false;
  }
}
