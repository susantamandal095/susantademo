import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private http: HttpClient) { }
  postRequest(url: string, data: any): any {
    let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
})
let payload = data; 
let endPoint ='https://jsonplaceholder.typicode.com' + url;
return this.http.get(endPoint, payload);

  }
  makeFocusById(id: string) {
    setTimeout(() => {
      document.getElementById(id).focus()
    }, 500);
  }
}
