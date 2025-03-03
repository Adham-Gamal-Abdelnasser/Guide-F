import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent, title: "Guide | Login"},
    {path: '**', component: NotfoundComponent, title: "Guide | page not found"},

];
 