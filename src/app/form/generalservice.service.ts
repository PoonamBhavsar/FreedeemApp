import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {

  constructor(private httpClient : HttpClient){}

  Register(postModel){
    let url =environment.sendRegistrationOtp;
    console.log(postModel);
    return this.httpClient.post(url,postModel);
  }
  OTP(postModel){
    let url =environment.verifyRegistrationOtp;
    console.log(postModel);
    return this.httpClient.post(url,postModel);
  }
  getProduct(postModel){
    let url =environment.getAllProductList;
    console.log(postModel);
    return this.httpClient.post(url,postModel);
  }
  getLoggedIn(){
    let url = "/../assets/json/loggedIn.json";
    console.log();
    return this.httpClient.get(url);
  }
}
