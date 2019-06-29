import { BirthDeathComponent } from './components/birth-death/birth-death.component';
import { UpdatePanComponent } from './components/update-pan/update-pan.component';
import { NewPanComponent } from './components/new-pan/new-pan.component';
import { ICDComponent } from './components/icd/icd.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { BirthComponent } from './components/birth/birth.component';
import { DeathComponent } from './components/death/death.component';
import { JqxdemoComponent } from './components/jqxdemo/jqxdemo.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  { path:"home",
    component:HomeComponent,
    children:[
    { path:"dashboard", component:DashboardComponent},
    { path:"icd",component:ICDComponent},
    {path:"new-pan",component:NewPanComponent},
    {path:"update-pan",component:UpdatePanComponent},
    {path:"birth",component:BirthComponent},
    {path:"death",component:DeathComponent},
    {path:"jqxdemo",component:JqxdemoComponent}    
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

