import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartDataList:any=[];
  public productList=new BehaviorSubject<any>([]);
  public packageName : string = "";
  public packageAmount:string="";
  public final:string=""
  public name:string=''
  public mobilenumber:string=''
  public address:string=''


  
  // public search = new BehaviorSubject<string>("");
  
  getProductData(){
    return this.productList.asObservable();
  }
 
    setProduct(product:any){
      this.cartDataList.push(...product);                 
      this.productList.next(product)

    }
    
    addToCart(product:any){
      this.cartDataList.push(product);
      this.productList.next(this.cartDataList);
      this.getTotalAmount();
    }
     
    getTotalAmount():number {
      let grandTotal=0;
      this.cartDataList.map((a:any)=>{
        grandTotal +=parseFloat(a.total); 
        // console.log(grandTotal,"hii")  
      })
      return grandTotal;
    }
    
    
    removeCartData(product:any){
      this.cartDataList.map((a:any,index:any)=>{
        if(product.alacarte_id===a.alacarte_id){
          this.cartDataList.splice(index,1)
        } 
      })
      
      this.productList.next(this.cartDataList)
    }
          
   

}
