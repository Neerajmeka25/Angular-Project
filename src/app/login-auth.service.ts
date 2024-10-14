import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private http: HttpClient) { }
  url = "gs://login-authentication-d873f.appspot.com/users";
}
