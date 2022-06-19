import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }

  url="http://104.40.74.98:8000/org/webData/"

  constructor(private http:HttpClient) { }

  packages1(){
    return this.http.get("http://104.40.74.98:8000/org/webData/yash-lco-1")
  // http://104.40.74.98:8000/org/webData/suraj-cable-nw-1
  }


  
  packages(id : any = 0){
    return this.http.get(this.url + id)
 }
  channels(){
    return this.http.get(" http://104.40.74.98:8000/alacart")
  }



}

  