import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  screenHeight:any;
  screenWidth:any;
  mainContainerHeight:any;
  mainContainerLeftWidth:any;
  mainContainerRightWidth:any
  mainContainerRightHeight: number;
  constructor() { }

  ngOnInit() {
    this.resiz();
  }
  @HostListener('window:resize', ['$event'])
  public resiz() {
    setTimeout(() => {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.mainContainerHeight=this.screenHeight-55;
        this.mainContainerLeftWidth=document.getElementById("main-container-left").clientWidth;
        this.mainContainerRightWidth=this.screenWidth-this.mainContainerLeftWidth;
        this.mainContainerRightHeight=this.screenHeight-57;
  }
    )}



}
