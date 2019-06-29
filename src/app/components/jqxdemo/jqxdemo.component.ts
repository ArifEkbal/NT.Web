import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/Constants/urls';

@Component({
  selector: 'app-jqxdemo',
  templateUrl: './jqxdemo.component.html',
  styleUrls: ['./jqxdemo.component.css']
})
export class JqxdemoComponent implements OnInit {

  source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'ApplicantName', type: 'string' },
            { name: 'GuardianName', type: 'string' },
        ],
        root: 'Result',
        record: '',
        id: 'Id',
        url: API_URL + "ICDCertificate"
    };
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
    dataAdapter: any = new jqx.dataAdapter(this.source);
    // cellsrenderer = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {
    //     if (value < 20) {
    //         return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
    //     }
    //     else {
    //         return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
    //     }
    // };
    columns: any[] =
    [
        { text: 'Applicant Name',  datafield: 'ApplicantName', width: 50 },
        { text: 'Guardian Name',  datafield: 'GuardianName', width: 250 },
       
    ];    
  constructor() { }

  ngOnInit() {
  }

}
