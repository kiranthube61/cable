import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelsService } from 'src/app/service/channels.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
users:any=[];
company:any;
  invid="";
  constructor(private package1:ChannelsService ,private route:ActivatedRoute) {
    // this.package1.packages().subscribe((res:any)=>{
    //   this.users=res;
    //   console.log(this.users)
    // })
    

  }

  ngOnInit(): void {

    this.getInvoiceDetails();
    this.route.queryParams.subscribe(params=>{
      this.invid=params['invid']
      console.log(params);
      if(this.invid){
        this.getInvoiceDetails();
      }
    })  
  }
  about(){
    document.getElementById("abtus")?.scrollIntoView({behavior:"smooth"});
  }
  provide(){
    document.getElementById("our")?.scrollIntoView({behavior:"smooth"});
  }
  contact(){
    document.getElementById("foot")?.scrollIntoView({behavior:"smooth"});
  }
  getInvoiceDetails(){
    this.package1.packages(this.invid).subscribe((res:any)=>{
      this.users=res
    
      console.log(this.users)
    })
  }

}
