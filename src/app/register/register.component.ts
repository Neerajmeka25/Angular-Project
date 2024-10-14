import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient){ };


  registerDetails = {
    username: '',
    password: '',
  };
  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.registerDetails);
    }
    this.http.post("https://login-authentication-d873f-default-rtdb.firebaseio.com/users.json",this.registerDetails)
    .subscribe((res)=>{
        console.log(res);
      });
    };


}
