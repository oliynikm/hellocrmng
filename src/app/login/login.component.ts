import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  private display: boolean = true;
  error = '';
  redirectUrl: string;
  private loginform: FormGroup;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private userService: UserService,private fb: FormBuilder) {
    this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
  }

  ngOnInit(): void {
        this.userService.logout();
        this.loginform = this.fb.group({
          'login': new FormControl( '', Validators.required),
          'password': new FormControl('', Validators.required)
        });
  }

  login() {
    this.loading = true;

    this.authenticationService.login(this.loginform.get('login').value, 
            this.loginform.get('password').value)
      .subscribe(
        result => {
          this.loading = false;

          if (result) {
            this.userService.login(result);
            this.navigateAfterSuccess();
          } else {
            this.error = 'Username or password is incorrect';
          }
        },
        error => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }

  private navigateAfterSuccess() {
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['/']);
    }
  }

}
