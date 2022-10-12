import {Injectable} from "@angular/core";
import {Router} from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
  private token!: string;

  public redirectUrl!: string;

  constructor(private router: Router) {
  }

  getToken() : string {
    return this.token;
  }

  login(): string {
    this.token = 'ervefeLyxelA';
    this.router.navigateByUrl(this.redirectUrl);
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }


}
