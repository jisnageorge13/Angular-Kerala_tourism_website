import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch:'full'
    },
    {
        path: "login", component:LoginComponent
        
    },
    {
        path:'home',component:HomeComponent
    },
    {
        path: 'districts/:districtName', component: DistrictsComponent 
    },
    {
        path: 'contact', component: ContactComponent 
   },
    {
        path: "navbar", component: NavbarComponent,
        
    },
    
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
