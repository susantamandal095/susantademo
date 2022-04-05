import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { WebserviceService } from '../services/webservice.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isTrue: boolean = false;
  profile: any = [];
  // route: any;
  value:any;
  constructor(private route:Router,public webService: WebserviceService) { }

  ngOnInit(): void {
    this.profile = [{
      "id": 1,
      "name": "Susanta Mandal",
      "email": "susantamandal095@gmail.com",
      "mobile": "9679337134",
      "password": "Susanta@123456",
      "address": "Harekrishna pur,Rohini,Jhargarm-721143",

    }];
    this.value = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    this.fetchingdata();
  }
  update(){
    alert("Update Successful !!")
    this.value = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }
  remove(){
    alert("Profile Removed Successful !!")
  }
  img : any = []
  fetchingdata(){
    let requestData = {  
}
this.webService.postRequest("/albums/${albumId}/photos",requestData).
subscribe(
  data => {
    this.img = data ? data : [];
console.log(this.img)
  },error => {
    alert("Something went wrong!!")
  }
);
  }
}

