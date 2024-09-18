import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { ChooseGoalsComponent } from './Component/choose-goals/choose-goals.component';
import { FillDetailsComponent } from './Component/fill-details/fill-details.component';
import { ChoosePlanComponent } from './Component/choose-plan/choose-plan.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path:'',component:LandingPageComponent},
    { path: 'login', component:LoginComponent } ,
    { path: 'choose-goal', component:ChooseGoalsComponent } ,
    { path: 'fill-details', component:FillDetailsComponent } ,
    { path: 'choose-plan', component:ChoosePlanComponent } ,
    { path: 'sign-up', component:SignUpComponent } ,





];
