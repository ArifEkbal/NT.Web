import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private _snackBar: MatSnackBar) { }
  openSuccessSnackbar(message)
  {
    const config = new MatSnackBarConfig();
    config.panelClass = ['success-toaster'];
    config.horizontalPosition='end';
    config.duration = 2000;
    let snackBarRef =this._snackBar.open(message,null,config) ;
  }
  openErrorSnackbar(message)
  {
    const config = new MatSnackBarConfig();
    config.panelClass = ['error-toaster'];
    config.horizontalPosition='end';
    config.duration = 2000;
    let snackBarRef =this._snackBar.open(message,null,config) ;
  }
}
