import { GuardianRadioBtns } from './../../Constants/guardian-radioBtns';
import { GuardianTitles } from './../../Constants/guardian-title';
import { API_URL } from './../../Constants/urls';
import { Component, OnInit } from '@angular/core';

import { ICD } from 'src/app/Models/icd.model';
import { CrudService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { ApplicantTitles } from 'src/app/Constants/applicant-titles';
import { ICDFileType } from 'src/app/Constants/file-type';
import { FileUploadStatus } from 'src/app/Models/file-upload-status.model';
import { ToasterService } from 'src/app/helper/toaster.service';



@Component({
  selector: 'app-icd',
  templateUrl: './icd.component.html',
  styleUrls: ['./icd.component.css']
})
export class ICDComponent implements OnInit {

  icdModel: ICD;
  UploadURL = API_URL + "ICDCertificate/uploadFile";
  postURL = API_URL + "ICDCertificate";
  public fileUploaded = false;
  selectedFile: File;
  fileIsSelected = false;
  fileUploadStatus: FileUploadStatus;
  certificateTypes = [
    { id: 1, name: 'Income' },
    { id: 2, name: 'Domicile' },
    { id: 3, name: 'Caste' }
  ]
  public applicantTitles = ApplicantTitles;
  public guardianTitles = GuardianTitles;
  public guardianRadioBtns = GuardianRadioBtns;
  public fileTypes = ICDFileType;

  constructor(private crudService: CrudService, private _httpClient: HttpClient, private toasterService: ToasterService) {
    this.icdModel = new ICD();
    console.log(this.icdModel.ApplicantTitle);
  }

  ngOnInit() {
    console.log(this.icdModel.IsFather);
    console.log(this.UploadURL);
  }
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    this.fileIsSelected = true;
  }
  onUpload() {
    const fd = new FormData;
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this._httpClient.post(this.UploadURL + "/" + this.icdModel.ApplicantName + "/"
      + this.icdModel.GuardianName + "/" + this.icdModel.FileType, fd).
      subscribe((response: FileUploadStatus) => {
        this.fileUploadStatus = response;
        if (this.fileUploadStatus.StatusCode == 200) {
          this.toasterService.openSuccessSnackbar(this.fileUploadStatus.Message);
          if (this.icdModel.FileType == "File1") {
            this.icdModel.IsFile1Uploaded = true;
            //this.selectedFile = null;          
          }
          else if (this.icdModel.FileType == "File2") {
            this.icdModel.IsFile2Uploaded = true;
          }
        }
        console.log(response);
      }, error => {
        this.toasterService.openErrorSnackbar("An unexpected error occured");
        console.log(error);
      })
    this.fileUploaded = true;
  }
  icdFormSubmit() {
    console.log("hi");
    this.crudService.postData(this.postURL, this.icdModel).
      subscribe((response: FileUploadStatus)=> {
        this.fileUploadStatus = response;
        console.log(response);
        if(response.StatusCode == 201){
          this.toasterService.openSuccessSnackbar("Form submitted successfully");
        }
      },error => {
        this.toasterService.openErrorSnackbar("An unexpected error occured");
        console.log(error);
      })
    }
}
