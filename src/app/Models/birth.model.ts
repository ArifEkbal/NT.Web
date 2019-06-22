export class Birth {

    ApplicantTitle: string;
    ApplicantName: string;
    FatherTitle: string;
    FatherName: string;
    FileType: string;
    CreatedBy: number;
    IsFile1Uploaded: boolean;
    IsFile2Uploaded: boolean;
    IsFile3Uploaded: boolean;

    constructor(ApplicantTitle = "", ApplicantName = "", FatherTitle = "", FatherName = "", FileType = "") {
        this.ApplicantTitle = ApplicantTitle;
        this.ApplicantName = ApplicantName;
        this.FatherTitle = FatherTitle;
        this.FatherName = FatherName;
        this.FileType = FileType;
        this.CreatedBy = 3;
        this.IsFile1Uploaded = false;
        this.IsFile2Uploaded = false;
        this.IsFile3Uploaded = false;
    }
}