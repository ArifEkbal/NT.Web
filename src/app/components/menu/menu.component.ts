import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  reportCertificateIsClicked=false;
  reportBirthDeathIsClicked=false;
  reportPanIsClicked=false;
  reportIsClicked=false;
  transactionIsClicked=false;
  panCardIsClicked=false;
  certificateIsClicked=false;
  walletIsClicked=false;
  constructor() { }

  ngOnInit() {
  }
   onPanCardClick()
   {
      this.panCardIsClicked=!this.panCardIsClicked;
   }
   onCertificateClick()
   {
     this.certificateIsClicked=!this.certificateIsClicked;
   }
   onTransactionClick()
   {
    // this.transactionIsClicked=!this.transactionIsClicked;

   }
   onWalletClick()
   {
     this.walletIsClicked=!this.walletIsClicked;
   }
   onReportClick()
     {
      this.reportIsClicked=!this.reportIsClicked;
     }
    onReportPanClick()
    {
      this.reportPanIsClicked=!this.reportPanIsClicked;
    }
    onReportCertificateClick()
    {
      this.reportCertificateIsClicked=!this.reportCertificateIsClicked;
    }
    onReportBirthDeathClick()
    {
      this.reportBirthDeathIsClicked=!this.reportBirthDeathIsClicked;
    }
   
}
