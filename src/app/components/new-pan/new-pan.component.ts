import { GuardianRadioBtns } from './../../Constants/guardian-radioBtns';
import { GuardianTitles } from './../../Constants/guardian-title';
import { ApplicantTitles } from './../../Constants/applicant-titles';
import { NewPAN } from './../../Models/new-pan.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-pan',
  templateUrl: './new-pan.component.html',
  styleUrls: ['./new-pan.component.css']
})
export class NewPanComponent implements OnInit {

  public newPanModel:NewPAN;
  public applicantTitles=ApplicantTitles;
  public guardianTitles=GuardianTitles;
  public GuardianRadioBtns=GuardianRadioBtns;

  constructor() { 
    this.newPanModel=new NewPAN();
  }

  ngOnInit() {
  }
  newPanFormFormSubmit()
{

}
}
