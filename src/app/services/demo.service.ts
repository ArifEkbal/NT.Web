import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AJN } from '../Models/AJN.model';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private _httpClient:HttpClient) { }
  public ajn3:AJN=new AJN();
  getRequest(url)
  {
    return this._httpClient.get(url);
  }
  setAjn(data)
  {
      this.ajn3=data;
      console.log("setdata="+this.ajn3.GuardianName)
  }
  getAjn(){
    return this.ajn3;
    
  }
}
