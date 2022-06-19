import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ChannelsService } from 'src/app/service/channels.service';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
users:any
user:any
totalItemNumber:number=0;
productList:any;
search:any
public products:any=[];
packageName="";
packageAmount="";




  constructor(private  http:ChannelsService , private http1:CartService,private router:Router) {
    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    http.channels().subscribe((data)=>{
      this.user=data
      this.user.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.MRP})
      });    
      
    });
   }
  ngOnInit(): void {
    this.http1.getProductData().subscribe(res=>{
      this.totalItemNumber=res.length;
      this.products=res
      console.log(this.products)
      this.packageName= this.http1.packageName
      this.packageAmount=this.http1.packageAmount
      console.log("AAAAAAAAAAAAAAA")
    })
    
  }
  addtoCart(item:any){
    this.http1.addToCart(item);
    console.log(this.addtoCart)
  }
  packageDetails(name:any,amount:any){
    this.http1.packageName=name
    this.http1.packageAmount=amount
  }
}
