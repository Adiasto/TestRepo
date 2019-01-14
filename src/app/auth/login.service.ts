import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  isAuthorized = false;

  authorize(form) {
    return this.httpClient.post('https://reqres.in/api/login', form);
  }
}
