import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './form/home/home.component';
import { LoginComponent } from './form/login/login.component';
import { ProductDetailsComponent } from './form/product-details/product-details.component';


const routes: Routes = [
  
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"productDetails",
    component:ProductDetailsComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'**',
    redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
