import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  
  constructor(private route:Router,public webService: WebserviceService) { }

  ngOnInit(): void {
  }
  go(){
    if(this.username == '' || this.username == undefined){
      this.webService.makeFocusById('username')
      alert("Enter valid Username !!")
      return
    }
    if(this.password == '' || this.password == undefined){
      this.webService.makeFocusById('password')
      alert("Enter valid Password !!")
      return
    }
     // this is use as a static only
     if(this.username == "sm@gmail.com" && this.password == "Susanta@1234")
     {
      alert("Login Successful !!")
      this.route.navigate(['/home']);
     }
     else{
      alert("Invalid Username or Password")
      this.route.navigate(['/login']);
     }
    //   i will use for dyanimic below code ..............
// let requestData = {
//   "username": this.username ? this.username : '',
//   "password": this.password ? this.password : '',
// }
// this.webService.postRequest("for/sinin/api/example", requestData).
// subscribe(
//   data => {
//     if (data.status == true) {
//       alert("Login Successful !!")
      // this.route.navigate(['/home']);
//     }
//     else{
//         if (data.status == false) {
//           alert("Invalid Username or Password")
            // this.route.navigate(['/login']);
//         }
//     }
//   },error => {
//     alert("Something went wrong!!")
//   }
// );
  }
}
