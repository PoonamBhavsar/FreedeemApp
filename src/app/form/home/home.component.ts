import { Component, Input, OnInit } from '@angular/core';
import { GeneralserviceService } from '../generalservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() blnProduct :boolean = true;
  login:boolean = false;
  mobileNo:String = '';
  blnError: boolean;
  strMessage: string;

  constructor(private service : GeneralserviceService) { }

  ngOnInit(): void {
    console.log("this.blnProduct",this.blnProduct);
    this.logIn();
  }

  logIn(){
    this.service.getLoggedIn().subscribe(data=>{
      if(data!=undefined && data != null){
        this.login=data['loggedIn'];
        this.mobileNo= data['mobile_number'];
      }
    },err => {
      console.log(err);        
      this.blnError = true;
      this.strMessage = "Some error occured!!";
    })
  }

}
