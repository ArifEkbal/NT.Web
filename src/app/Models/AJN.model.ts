export class AJN{

    IsDomicile:boolean;
    IsIncome:boolean;
    IsCaste:boolean;
    ApplicantTitle:string;
    ApplicantName:string;
    IsFather:boolean;
    GuardianTitle:string;
    GuardianName:string;
    MotherTitle:string;
    MotherName:string;
    IsGram:boolean;
    AddressLine1:string;
    AddressLine2:string;
    PostOffice:string;
    Tehsil:string;
    PoliceStation:string;
    CreatedBy:number;

    constructor(IsDomicile=false,IsIncome=false,IsCaste=false,ApplicantTitle="",
    ApplicantName="",IsFather=false,GuardianTitle="",GuardianName="",MotherTitle="",
    MotherName="",IsGram=false,AddressLine1="",AddressLine2="",PostOffice="",
    Tehsil="",PoliceStation="",CreatedBy=3)
    {
        this.IsDomicile=IsDomicile;
        this.IsIncome=IsIncome;
        this.IsCaste=IsCaste;
        this.ApplicantTitle=ApplicantTitle;
        this.ApplicantName=ApplicantName;
        this.IsFather=IsFather;
        this.GuardianTitle=GuardianTitle;
        this.GuardianName=GuardianName;
        this.MotherTitle=MotherTitle;
        this.MotherName=MotherName;
        this.IsGram=IsGram;
        this.AddressLine1=AddressLine1;
        this.AddressLine2=AddressLine2
        this.PostOffice=PostOffice;
        this.Tehsil=Tehsil;
        this.PoliceStation=PoliceStation;
        this.CreatedBy=CreatedBy;
    }
}
