import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import{FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] 
})

export class CartComponent implements OnInit {
  form: FormGroup = new FormGroup({});  
  
  public products:any=[];
  public grandTotal!: number;
  public final:any;
  packageName="";
  packageAmount="";

  constructor(private http:CartService , private fb: FormBuilder,private http1:HttpClient) { 
    this.form = fb.group({  
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
    }) 


   
    
  }
  get f(){  
    return this.form.controls;  
  }  
                              
  ngOnInit(): void {
      this.http.getProductData().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.http.getTotalAmount();

      this.packageName= this.http.packageName
      this.packageAmount=this.http.packageAmount
      // console.log(user)

      if(this.packageAmount){
        this.final =parseFloat((this.packageAmount)) + ((this.grandTotal))
      }else{
        this.final= this.grandTotal
      }
      
    })

  }
  removeProduct(item:any){  
    this.http.removeCartData(item);
  }
  refresh():void{
    window.location.replace("/congrats");
  }

  
  
}
