import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient,private route: Router) {};
  userDetails = {
    username: '',
    password: '',
  };                   
  submitForm(form: any): void {
    if (form.valid) {
      this.http.get("https://login-authentication-d873f-default-rtdb.firebaseio.com/users.json").
      subscribe((res)=>{
        var flag = 0;
        const loginData =  Object.keys(res).map(key => res[key]);
        loginData.forEach(data => {  
          if(data.username==this.userDetails.username && data.password == this.userDetails.password)
          {
            flag = 1;
          }
        }); 
        if(flag){
          this.route.navigate(['dashboard']);
        }
        else {
          alert("Login Unsuccessful")
        }
      });
    }
    // {
    //   console.log('Form data:', this.userDetails);
    //   alert("Success");
    // }
    // else{
    //   console.log("wrong credentials");
    //   alert("Reject");
    // }
  }
}
