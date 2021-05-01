import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'selenium-webdriver';
import { GeneralserviceService } from '../generalservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  postBody:any;
  allProduct:Object[]=[];
  strMessage: string;
  blnError: boolean=false;
  //@Output() productDetail = new EventEmitter();
  constructor(private service : GeneralserviceService, private router : Router) { }

  ngOnInit(): void {
    this.getProduct(1);
  }

  getProduct(page){
    this.postBody={
       "api_key": "ere343ui97yjfr",
       "page": page
      }
    
    this.service.getProduct(this.postBody).subscribe((data:Object)=>{

      console.log(data);
      
      if(data!=undefined && data!= null && data!= 0){
        this.allProduct=data['data']['product'];
        console.log(this.allProduct);
        
      }

    },err => {
      console.log(err);        
      this.blnError = true;
      this.strMessage = "Some error occured!!";
    })
  }
  productDetails(data){
    console.log(data);
   // this.productDetail.emit(data);
    this.router.navigate(['/productDetails'],{state:{data:data}})
    
  }
}
