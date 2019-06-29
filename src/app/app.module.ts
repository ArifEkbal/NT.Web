import { DemoserviceService } from './demoservice.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCardModule,MatSnackBarModule,MatRadioModule,MatSelectModule,MatButtonModule,MatCheckboxModule} from '@angular/material';
import {AgGridModule} from 'ag-grid-angular';
/* import { FileSelectDirective } from 'ng2-file-upload'; */
import {HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule,MatSlideToggleModule, MatIconModule,MatDialogModule} from '@angular/material';
import {DemoService } from './services/demo.service';

import { NewHomeComponent } from 'src/app/components/new-home/new-home.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ICDComponent } from './components/icd/icd.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { BirthDeathComponent } from './components/birth-death/birth-death.component';
import { NewPanComponent } from './components/new-pan/new-pan.component';
import { UpdatePanComponent } from './components/update-pan/update-pan.component';
import { BirthComponent } from './components/birth/birth.component';
import { DeathComponent } from './components/death/death.component';
import { JqxdemoComponent } from './components/jqxdemo/jqxdemo.component';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    LoginComponent,
    NewHomeComponent,
    DashboardComponent,
    ICDComponent,
    HomeComponent,
    BirthDeathComponent,
    NewPanComponent,
    UpdatePanComponent,
    BirthComponent,
    DeathComponent,
    JqxdemoComponent,
    jqxBarGaugeComponent,
    jqxGridComponent
   
  ],
  entryComponents: [
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatSidenavModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    AgGridModule.withComponents(null),
    
  ], 
  providers: [DemoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
