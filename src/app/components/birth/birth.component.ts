import { Component, OnInit } from '@angular/core';
import { ICD } from 'src/app/Models/icd.model';
import { API_URL } from 'src/app/Constants/urls';
import { FileUploadStatus } from 'src/app/Models/file-upload-status.model';
import { ApplicantTitles } from 'src/app/Constants/applicant-titles';
import { ICDFileType, BirthFileType } from 'src/app/Constants/file-type';
import { CrudService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { GuardianTitles } from 'src/app/Constants/guardian-title';
import { GuardianRadioBtns } from 'src/app/Constants/guardian-radioBtns';
import { ToasterService } from 'src/app/helper/toaster.service';
import { Birth } from 'src/app/Models/birth.model';
import { FatherTitles } from 'src/app/Constants/father-titles';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css']
})
export class BirthComponent implements OnInit {

  birthModel: Birth;
  UploadURL = API_URL + "BirthCertificate/uploadFile";
  postURL = API_URL + "BirthCertificate";
  public fileUploaded = false;
  selectedFile: File;
  isUploadEnable = false;
  fileUploadStatus: FileUploadStatus;
  public applicantTitles = ApplicantTitles;
  public fatherTitles = FatherTitles;
  public fileTypes = BirthFileType;

  constructor(private crudService: CrudService, private _httpClient: HttpClient, private toasterService: ToasterService) {
    this.birthModel = new Birth();
    console.log(this.birthModel.ApplicantTitle);
  }

  ngOnInit() {
    console.log(this.UploadURL);
  }
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    this.isUploadEnable = true;
  }
  onUpload() {
    const fd = new FormData;
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this._httpClient.post(this.UploadURL + "/" + this.birthModel.ApplicantName + "/"
      + this.birthModel.FatherName + "/" + this.birthModel.FileType, fd).
      subscribe((response: FileUploadStatus) => {
        this.fileUploadStatus = response;
        if (this.fileUploadStatus.StatusCode == 200) {
          this.toasterService.openSuccessSnackbar(this.fileUploadStatus.Message);
          if (this.birthModel.FileType == "File1") {
            this.birthModel.IsFile1Uploaded = true;
            //this.selectedFile = null;          
          }
          else if (this.birthModel.FileType == "File2") {
            this.birthModel.IsFile2Uploaded = true;
          }
          else if (this.birthModel.FileType == "File3") {
            this.birthModel.IsFile3Uploaded = true;
          }
        }
        console.log(response);
      }, error => {
        this.toasterService.openErrorSnackbar("An unexpected error occured");
        console.log(error);
      })
    this.fileUploaded = true;
  }
  birthFormSubmit(birthForm:NgForm) {
    console.log("hi");
    this.crudService.postData(this.postURL, this.birthModel).
    subscribe((response: FileUploadStatus)=> {
      this.fileUploadStatus = response;
      console.log(response);
      if(response.StatusCode == 201){
        this.toasterService.openSuccessSnackbar("Form submitted successfully");
        birthForm.resetForm();
      }
    },error => {
      this.toasterService.openErrorSnackbar("An unexpected error occured");
      console.log(error);
    })
  }
}
