import { FileUploadStatus } from './../../Models/file-upload-status.model';
import { GuardianRadioBtns } from './../../Constants/guardian-radioBtns';
import { FatherTitles } from '../../Constants/father-titles';
import { ApplicantTitles } from './../../Constants/applicant-titles';
import { CrudService } from 'src/app/services/crud.service';
import { Birth } from './../../Models/birth.model';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/Constants/urls';
import { MatSnackBar } from '@angular/material';
import { ToasterService } from 'src/app/helper/toaster.service';
import { BirthFileType } from 'src/app/Constants/file-type';

@Component({
  selector: 'app-birth-death',
  templateUrl: './birth-death.component.html',
  styleUrls: ['./birth-death.component.css']
})
export class BirthDeathComponent implements OnInit {

  public fileUploadUrl = API_URL + "ICDCertificate/uploadFile";
  public fileUploaded: boolean;
  public selectedFile: File;
  public fileIsSelected: boolean;
  public fileUploadStatus: FileUploadStatus;
  public birthModel: Birth;
  public applicantTitles = ApplicantTitles;
  public fatherTitles = FatherTitles;
  public fileTypes = BirthFileType;

  constructor(private crudService: CrudService, private toasterService: ToasterService) {
    this.birthModel = new Birth();
    this.fileUploadStatus = new FileUploadStatus();
  }
  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.fileIsSelected = true;
  }

  onUpload() {
    const fd = new FormData;
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.crudService.postData(this.fileUploadUrl+ "/" + this.birthModel.ApplicantName + "/" 
    + this.birthModel.FatherName + "/" + this.birthModel.FileType, fd).
      subscribe((response: FileUploadStatus) => {
        this.fileUploadStatus = response;
        this.toasterService.openSuccessSnackbar(this.fileUploadStatus.Message);
      }, error => {
        this.toasterService.openErrorSnackbar("An unexpected error occured");
      })
    this.fileUploaded = true;
  }
  birthDeathFormSubmit() {

  }

}
