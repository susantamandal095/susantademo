import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { WebserviceService } from '../services/webservice.service';
@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent implements OnInit {
  isTrue: boolean = false;
  s_name: string;
  l_name: string;
  email: string;
  mobile: string;
  password: string;
  c_password: string;
  add_one: string;
  add_two: string;
  city: string;
  state: string;
  pin: string;
  pass :any;
  cpass:any;
  passmsg:any;
  constructor(private route:Router,public webService: WebserviceService) { }

  ngOnInit(): void {
    
  }

  //////// parsonal /////////////////////
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  //massFormControl = new FormControl('', [
   // Validators.required,
   // 
  //]);
  phoneFormControl = new FormControl('', [
    Validators.required,
  //  Validators.phone,
  ]);
  panFormControl = new FormControl('', [
    Validators.required,
  //  Validators.phone,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  //  Validators.phone,
  ]);
  cnpasswordFormControl = new FormControl('', [
    Validators.required,
  //  Validators.phone,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  pinFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  cityFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  stateFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  addtwoFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  addoneFormControl = new FormControl('', [
    Validators.required,
    
  ]);
 
  hqFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  spFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  cgpaFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  fileFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  fileoneFormControl = new FormControl('', [
    Validators.required,
    
  ]);

  compFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  degFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  dojFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  doeFormControl = new FormControl('', [
    Validators.required,
    
  ]);

 ctcFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
    if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName)
    {
    (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
    }
    }
    }
    
 sinup()
 {
  if(this.s_name == '' || this.s_name == undefined){
    this.webService.makeFocusById('s_name')
    alert("Enter valid First name in Personal Information!!")
    return
  }
  if(this.l_name == '' || this.l_name == undefined){
    this.webService.makeFocusById('l_name')
    alert("Enter valid Last name in Personal Information!!")
    return
  }
  if(this.email == '' || this.email == undefined){
    this.webService.makeFocusById('email')
    alert("Enter valid Email in Personal Information!!")
    return
  }
  if(this.mobile == '' || this.mobile == undefined){
    this.webService.makeFocusById('mobile')
    alert("Enter valid Mobile in Personal Information!!")
    return
  }
  if(this.password == '' || this.password == undefined){
    this.webService.makeFocusById('password')
    alert("Enter valid Password in Personal Information!!")
    return
  }
  if(this.c_password == '' || this.c_password == undefined){
    this.webService.makeFocusById('c_password')
    alert("Enter valid Confirm Password in Personal Information!!")
    return
  }
  if(this.add_one == '' || this.add_one == undefined){
    this.webService.makeFocusById('add_one')
    alert("Enter valid Address 1 in Address!!")
    return
  }
  if(this.add_two == '' || this.add_two == undefined){
    this.webService.makeFocusById('add_two')
    alert("Enter valid Address 2 in Address!!")
    return
  }
  if(this.city == '' || this.city == undefined){
    this.webService.makeFocusById('city')
    alert("Enter valid City in Address!!")
    return
  }
  if(this.state == '' || this.state == undefined){
    this.webService.makeFocusById('state')
    alert("Enter valid State in Address!!")
    return
  }
  if(this.pin == '' || this.pin == undefined){
    this.webService.makeFocusById('pin')
    alert("Enter valid Pin in Address!!")
    return
  }

  // Sir this is use as a static purpous 
  if(this.s_name != '' && this.s_name != undefined && this.l_name != '' && this.l_name != undefined && this.email != '' && this.email != undefined && this.mobile != '' && this.mobile != undefined && this.password != '' && this.password != undefined && this.c_password != '' && this.c_password != undefined && this.add_one != '' && this.add_one != undefined && this.add_two != '' && this.add_two != undefined && this.city != '' && this.city != undefined && this.state != '' && this.state != undefined && this.pin != '' && this.pin != undefined){
    alert("Data Added Success!!")
  }
// Sir i will use for dyanimic below code ..............
// let requestData = {
//   "s_name": this.s_name ? this.s_name : '',
//   "l_name": this.l_name ? this.l_name : '',
//   "email": this.email ? this.email : '',
//   "mobile": this.mobile ? this.mobile : '',
//   "password": this.password ? this.password : '',
//   "add_one": this.add_one ? this.add_one : '',
//   "add_two": this.add_two ? this.add_two : '',
//   "city": this.city ? this.city : '',
//   "state": this.state ? this.state : '',
//   "pin": this.pin ? this.pin : '',
// }
// this.webService.postRequest("for/sinup/api/example", requestData).
// subscribe(
//   data => {
//     if (data.status == true) {
//       alert("Data Added Success!!")
//     }
//     else{
//         if (data.status == false) {
//           alert("Opp!! Data Not Added please Check..")
//         }
//     }
//   },error => {
//     alert("Something went wrong!!")
//   }
// );
 }   
login()
    {
      this.route.navigate(['/login']);
     }
checkpass(event)
 {
      this.pass = event;
 }
checkcpass(event)
 {
      this.cpass = event;
      this.passmsg ="";
      if(this.pass != this.cpass){
         this.passmsg = "Password and Confirm Password are not same !!!"
      }
}
reset()
{
      this.s_name = '',
       this.l_name = '',
       this.email = '',
       this.mobile = '',
       this.password = '',
       this.c_password = '',
       this.add_one = '',
       this.add_two = '',
       this.city = '',
       this.state = '',
       this.pin = ''
}
}
