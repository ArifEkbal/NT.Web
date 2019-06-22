export class FileUploadStatus{
    StatusCode:number;
    Message:string;
    Result:string;
    constructor(StatusCode=0,Message="",Result=""){
        this.Message=Message;
        this.StatusCode=StatusCode;
        this.Result=Result;
    }
}