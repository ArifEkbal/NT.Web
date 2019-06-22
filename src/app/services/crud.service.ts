import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICD } from '../Models/icd.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
 
  constructor(private _httpClient:HttpClient) { }

  postData(url,data){
    return this._httpClient.post(url,data);
  }
}
