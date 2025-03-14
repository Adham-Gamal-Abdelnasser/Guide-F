import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursestudentsComponent } from './coursestudents/coursestudents.component';

export const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full', title: "Guide | profile"},
    {path: 'login', component: LoginComponent, title: "Guide | Login"},
    {path: 'home', component: HomeComponent, title: "Guide | home" , children:[
        {path: 'profile', component: DoctorprofileComponent, title: "Guide | doctor profile"},
        {path: 'courses', component: CoursesComponent, title: "Guide | doctor courses"},
        {path: 'coursestudents', component: CoursestudentsComponent, title: "Guide | doctor courses"},
        
    ]},
    {path: '**', component: NotfoundComponent, title: "Guide | page not found"},


];
 