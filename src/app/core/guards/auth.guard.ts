import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";


@Injectable({
    providedIn: 'root'
  }
)
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.redirectUrl = state.url;
      this.router.navigateByUrl('auth/login');
      return false;
    }

  }

}
