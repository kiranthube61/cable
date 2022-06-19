import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CongratsComponent } from './component/congrats/congrats.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OtpComponent } from './component/otp/otp.component';


import { PackagesComponent } from './component/packages/packages.component';

const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"cart",component:CartComponent},
  {path:"packages" ,component:PackagesComponent},
  {path:"cart",component:CartComponent},
  {path:"congrats", component:CongratsComponent},
  {path:"otp",component:OtpComponent},
  {path:"nav", component:NavbarComponent},
  // {path:"",redirectTo:"/nav",pathMatch:"full"}
  
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
