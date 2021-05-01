import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralserviceService } from '../generalservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:any;
  blnSuccess: boolean = false;
  strMessage: string;
  blnError:boolean=false;


  constructor(private service : GeneralserviceService,private router : Router) { }

  ngOnInit(): void {
    this.product = history.state['data'];
  }

  addToCart(){
    this.service.getLoggedIn().subscribe(data=>{
      if(data['loggedIn'] == true){
        this.blnSuccess = true;
        this.strMessage="Product Added to cart Succesfully !!";
      }
      else{
        this.router.navigate(['login']);
      }
    },err => {
      console.log(err);        
      this.blnError = true;
      this.strMessage = "Some error occured!!";
    })
  }

}
