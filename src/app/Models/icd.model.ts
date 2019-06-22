export class ICD {
    IsDomicile: boolean;
    IsCaste: boolean;
    IsIncome: boolean;
    ApplicantTitle: string;
    ApplicantName: string;
    GuardianTitle: string;
    IsFather: boolean;
    GuardianName: string;
    CreatedBy: number;
    FileType: string;
    IsFile1Uploaded: boolean;
    IsFile2Uploaded: boolean;

    constructor(IsDomicile = false, IsCaste = false, IsIncome = false, FileType = "",
        ApplicantTitle = "", ApplicantName = "", IsFather = true, GuardianTitle = "", GuardianName = "") {
        this.IsDomicile = IsDomicile,
            this.IsCaste = IsCaste,
            this.IsIncome = IsIncome,
            this.ApplicantTitle = ApplicantTitle
        this.ApplicantName = ApplicantName,
            this.IsFather = IsFather,
            this.GuardianTitle = GuardianTitle;
        this.GuardianName = GuardianName;
        this.CreatedBy = 3;
        this.FileType = FileType;
        this.IsFile1Uploaded = false;
        this.IsFile2Uploaded = false
    }

}