import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { ChooseGoalsComponent } from './Component/choose-goals/choose-goals.component';

export const routes: Routes = [
    {path:'',component:LandingPageComponent},
    { path: 'login', component:LoginComponent } ,
    { path: 'choose-goal', component:ChooseGoalsComponent } ,


];
