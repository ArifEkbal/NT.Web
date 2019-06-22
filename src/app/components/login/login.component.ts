import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  values: boolean;

  constructor( private _router:Router) { }

  onLogin(value)
  {
    /* this.values=value; */
    this._router.navigate(['/home']); 
    /* this.values=!this.values; */
  }
  ngOnInit() {
  }

}
