import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {globalApp} from "../../../data/constants/global.variable.constant";

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  token = '';
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
  canActivate(): boolean {
    this.token = localStorage.getItem(globalApp.tokenKey) || '';
    if (this.token !== null && this.token !== '') {
      if (this.authService.validateToken(this.token)) {
        return true;
      }
    }
    this.router.navigate(['/auth']);
    return false;
  }
}

