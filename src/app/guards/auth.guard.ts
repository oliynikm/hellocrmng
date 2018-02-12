import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {tokenNotExpired} from 'angular2-jwt';

import {TOKEN_NAME} from '../services/auth.constant';
import {UserService} from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, 
    private userService: UserService) {
  }

  //TODO: check code style
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
    if (tokenNotExpired(TOKEN_NAME, this.userService.accessToken)) {
      return true;
    } else {
      this.router.navigate(['login'], {queryParams: {redirectTo: state.url}});
      return false;
    }
  }
}