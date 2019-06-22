export class Death {

    ApplicantTitle: string;
    ApplicantName: string;
    IsFather: boolean;
    GuardianTitle: string;
    GuardianName: string;
    FileType: string;
    CreatedBy: number;
    IsFile1Uploaded: boolean;
    IsFile2Uploaded: boolean;
    IsFile3Uploaded: boolean;

    constructor(ApplicantTitle = "", ApplicantName = "", GuardianTitle = "",
        GuardianName = "", FileType = "", IsFather = true, ) {
        this.ApplicantTitle = ApplicantTitle;
        this.ApplicantName = ApplicantName;
        this.IsFather = IsFather;
        this.GuardianTitle = GuardianTitle;
        this.GuardianName = GuardianName;
        this.FileType = FileType;
        this.CreatedBy = 3;
        this.IsFile1Uploaded = false;
        this.IsFile2Uploaded = false;
        this.IsFile3Uploaded = false;
    }
}