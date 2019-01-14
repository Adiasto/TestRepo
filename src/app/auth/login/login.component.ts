import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;

  userLogin = new FormGroup({
    email: new FormControl(this.name, [
      Validators.email]),
    password: new FormControl(this.password, [
      Validators.minLength(4)]),
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.loginService.authorize(this.userLogin.value).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('currentUser', JSON.stringify({
          token: res, email: this.userLogin.value.email
        }));
      },
      (err) => {
        console.log('err', err);
      },
      () => {
        this.loginService.isAuthorized = true;
        this.router.navigate(['drivers']);
      }
    );
  }
}
