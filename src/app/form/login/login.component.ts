import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralserviceService } from '../generalservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  postBody:any
  blnOtp:boolean = false;
  blnError: boolean = false;
  strMessage: string = '';
  mobileNo:string='';
  blnSuccess: boolean = false;

  constructor(private service : GeneralserviceService, private router : Router) { }

  ngOnInit(): void {
  }

 submit(){
console.log(this.mobileNo)
  this.postBody={
    "api_key": "ere343ui97yjfr",
    "mobile_number": this.mobileNo
}
   this.service.Register(this.postBody).subscribe(data=>{
     if(data['code'] == 200){
      this.blnSuccess = true;
      this.strMessage=data['message'];
      setTimeout(()=>{
        this.blnSuccess = false;
      this.strMessage='';
      },3000)
      this.blnOtp=true;
     }
     else{
       console.log("i am here");
       
       this.blnError=true;
       this.strMessage="Some Error Occured"
     }
    },err => {
      console.log(err);        
      this.blnError = true;
      this.strMessage = "Some error occured!!";
    })
 }

 submitOtp(){
  this.blnSuccess = false;
   this.postBody={
   "api_key": "ere343ui97yjfr",
   "mobile_number": "1234567890",
   "otp": "3456"
  }
  this.service.Register(this.postBody).subscribe(data=>{
    if(data['code'] == 200){
      this.blnSuccess = true;
      this.strMessage=data['message'];
      setTimeout(()=>{
        this.blnSuccess = false;
      this.strMessage='';
      this.router.navigate(["/home"])
      },5000)
    
     //this.blnOtp=true;
    }
    else{
      this.blnError=true;
      this.strMessage="Some Error Occured"
    }
  },err => {
    console.log(err);        
    this.blnError = true;
    this.strMessage = "Some error occured!!";
  })

 }

}
