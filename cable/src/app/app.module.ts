import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PackagesComponent } from './component/packages/packages.component';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { CartComponent } from './component/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CongratsComponent } from './component/congrats/congrats.component';
import { AgmCoreModule } from '@agm/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxOtpInputModule } from "ngx-otp-input";
import { OtpComponent } from './component/otp/otp.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { TestComponent } from './component/test/test.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PackagesComponent,
    CartComponent,
    CongratsComponent,
    OtpComponent,
    TestComponent,
   
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0"
    }),
    Ng2SearchPipeModule,
    NgxOtpInputModule,
    Ng2PageScrollModule.forRoot(),
   
   
    
    
  ],
  providers: [
    // {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function appRoutes(appRoutes: any): any[] | import("@angular/core").Type<any> {
  throw new Error('Function not implemented.');
}

