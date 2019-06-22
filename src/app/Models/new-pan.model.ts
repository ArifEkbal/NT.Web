export class NewPAN{

    ApplicantTitle:string;
    ApplicantName:string;
    GuardianTitle:string;
    IsFather:boolean;
    GuardianName:string;
    DOB:string;
    constructor(ApplicantTitle="",ApplicantName="",IsFather=false,GuardianTitle="",GuardianName="",DOB="")
    {
            this.ApplicantTitle=ApplicantTitle;
            this.ApplicantName=ApplicantName;
            this.IsFather=IsFather;
            this.GuardianTitle=GuardianTitle;
            this.GuardianName=GuardianName;
            this.DOB=DOB;
    }

}