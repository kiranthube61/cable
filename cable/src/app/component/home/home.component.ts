import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsService } from 'src/app/service/channels.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myname:any
  public markers: any[];
  public lat: number;
  public lng: number;
  public zoom: number;
  user: any=[];
  name1:any=[]
  name:any
  form: FormGroup = new FormGroup({});
  invid= "";
  loginForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    mobilenumber: new FormControl("",[Validators.required])
  });
  location: any;
  installAppMsg:any;
  
  signUp(data:any){
    this.http1.post("http://localhost:3000/signupUser",data).subscribe((result)=>{
      console.log(result)
    })
    if(data){
      
      alert("Signup Successfully done")
      this.home();
    }
  // console.log(data)
  }
 
  
  login() {
    this.http1.get("http://localhost:3000/signupUser").subscribe((res:any) => {
    
    const user = res.find((a: any) => {
    return a.name === this.loginForm.value.name && a.mobilenumber===this.loginForm.value.mobilenumber
    
   });
    if (user) { 
    // alert("Login Successfully!!");
    // this.loginForm.reset();
    this.router.navigate(['/packages'])
    this.setSessionStorage(user)
    // this.refresh1();
     console.log(user.name,user.mobilenumber,user.address)
     
     
    }
    else {
     alert("user not found ,Please signup first")
    //  this.home();
    }
   }, err => {
    alert("Something went wrong!!")
   }
   )
   }
  
  // slides = [
  //   {img: "https://us.123rf.com/450wm/dashadima/dashadima1801/dashadima180100004/94467166-vector-globe-with-satellite-equipment-isolated-on-white-background.jpg?ver=6"},
  //   {img: "https://media.istockphoto.com/photos/couple-watching-tv-picture-id175446014?k=20&m=175446014&s=612x612&w=0&h=V7997f_T444SBkuZYCjGVVDlh1e7_N_gOp7aneJoT00="},
  //   {img: "https://image1.masterfile.com/getImage/NjkzLTAzMzAwNjIwZW4uMDAwMDAwMDA=AGjNKS/693-03300620en_Masterfile.jpg"},
  //   {img: "https://cdn.w600.comps.canstockphoto.com/tv-system-remote-control-tv-set-and-clip-art_csp2186252.jpg"},
  //   {img: "https://media.gettyimages.com/photos/couple-watching-television-set-while-their-children-busy-in-different-picture-id131994138?s=612x612"},
  //   {img: "https://media.istockphoto.com/photos/couple-watching-tv-picture-id175446014?k=20&m=175446014&s=612x612&w=0&h=V7997f_T444SBkuZYCjGVVDlh1e7_N_gOp7aneJoT00="},
  //   {img: "https://image1.masterfile.com/getImage/NjkzLTAzMzAwNjIwZW4uMDAwMDAwMDA=AGjNKS/693-03300620en_Masterfile.jpg"},
  // ];
  // slideConfig = {"slidesToShow": 3, "slidesToScroll": 3, "Infinite":true};
  // names: string="";
  
  
  // slickInit(e:any) {
  //   console.log('slick initialized');
  // }
  
  // breakpoint(e:any) {
  //   console.log('breakpoint');
  // }
  
  // afterChange(e:any) {
  //   console.log('afterChange');
  // }
  
  // beforeChange(e:any) {
  //   console.log('beforeChange');
  // } 

  constructor(private fb:FormBuilder, private http:ChannelsService, private http1:HttpClient,private router:Router,private route:ActivatedRoute) {
    
    

    this.form = fb.group({  
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,
      name:['',[Validators.required,Validators.minLength(5)]] ,
      address:['',[Validators.required,Validators.minLength(20)]]
    })


    this.lat = 0;
    this.lng = 0;
    this.zoom = 2;
    this.markers = [];
    
  }

  getInvoiceDetails(){
    this.http.packages(this.invid).subscribe((res:any)=>{
      this.user=res
    
      this.name1=this.user[2]
      console.log(this.name1)
    })
  }
  get f(){  
    return this.form.controls;  
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

    // this.loginForm = this.fb.group({
    //   name: new FormControl("", [Validators.required]),
    //   mobilenumber: new FormControl("", [Validators.required]),
      
   
    //   })
   

    this.markers.push({
      position: {
        lat: 40.4381311,
        lng: -3.8196233
      },
      label: {
        color: "black",
        text: "Madrid"
      }
    });

    this.markers.push({
      position: {
        lat: 48.8615515,
        lng: 2.3112233
      },
      label: {
        color: "black",
        text: "Paris"
      }
    });
  }
  refresh():void{
    window.location.replace("/otp");
  }
  refresh1():void{
    window.location.replace("/packages");
   
  }
  home():void{
    window.location.replace("/home");
  }



     setSessionStorage(user : any){

      sessionStorage.setItem('name',user.name);
      sessionStorage.setItem('mobilenumber',user.mobilenumber);
      sessionStorage.setItem('address',user.address);
     
       this.myname = sessionStorage.getItem('name');
       console.log(this.myname + "hello")
      
  }




  
}
