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

  // TODO: check code style
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(TOKEN_NAME + ' : ' + this.userService.accessToken + ' outlet ' +     route.outlet);

    if (tokenNotExpired(TOKEN_NAME, this.userService.accessToken)) {
      console.log('r' + tokenNotExpired(TOKEN_NAME, this.userService.accessToken));
      return true;
    } else {
      console.log('s');
      this.router.navigate(['/login'], {queryParams: {redirectTo: state.url}});
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
