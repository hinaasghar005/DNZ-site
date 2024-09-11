import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';

export const routes: Routes = [
    {path:'',component:LandingPageComponent},
    { path: 'login', component:LoginComponent } ,

];
