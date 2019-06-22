import { Component, OnInit } from '@angular/core';
import { Death } from 'src/app/Models/death.model';
import { API_URL } from 'src/app/Constants/urls';
import { FileUploadStatus } from 'src/app/Models/file-upload-status.model';
import { ApplicantTitles } from 'src/app/Constants/applicant-titles';
import { GuardianTitles } from 'src/app/Constants/guardian-title';
import { GuardianRadioBtns } from 'src/app/Constants/guardian-radioBtns';
import { DeathFileType } from 'src/app/Constants/file-type';
import { CrudService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from 'src/app/helper/toaster.service';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.css']
})
export class DeathComponent implements OnInit {

  deathModel: Death;
  UploadURL = API_URL + "DeathCertificate/uploadFile";
  postURL = API_URL + "DeathCertificate";
  public fileUploaded = false;
  selectedFile: File;
  fileIsSelected = false;
  fileUploadStatus: FileUploadStatus;
  public applicantTitles = ApplicantTitles;
  public guardianTitles = GuardianTitles;
  public guardianRadioBtns = GuardianRadioBtns;
  public fileTypes = DeathFileType;

  constructor(private crudService: CrudService, private _httpClient: HttpClient, private toasterService: ToasterService) {
    this.deathModel = new Death();
    console.log(this.deathModel.ApplicantTitle);
  }

  ngOnInit() {
    console.log(this.deathModel.IsFather);
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

    this._httpClient.post(this.UploadURL + "/" + this.deathModel.ApplicantName + "/"
      + this.deathModel.GuardianName + "/" + this.deathModel.FileType, fd).
      subscribe((response: FileUploadStatus) => {
        this.fileUploadStatus = response;
        if (this.fileUploadStatus.StatusCode == 200) {
          this.toasterService.openSuccessSnackbar(this.fileUploadStatus.Message);
          if (this.deathModel.FileType == "File1") {
            this.deathModel.IsFile1Uploaded = true;
            //this.selectedFile = null;          
          }
          else if (this.deathModel.FileType == "File2") {
            this.deathModel.IsFile2Uploaded = true;
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
    this.crudService.postData(this.postURL, this.deathModel).
      subscribe((response: FileUploadStatus) => {
        this.fileUploadStatus = response;
        console.log(response);
        if (response.StatusCode == 201) {
          this.toasterService.openSuccessSnackbar("Form submitted successfully");
        }
      }, error => {
        this.toasterService.openErrorSnackbar("An unexpected error occured");
        console.log(error);
      })
  }
}
