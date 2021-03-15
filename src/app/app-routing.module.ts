import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoguedGuard } from './guards/loguedGuard/logued.guard';



const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home' , component:  HomeComponent ,canActivate: [LoguedGuard]},
  { path: 'edit-user' , component:  EditUserComponent ,canActivate: [LoguedGuard]},
  { path: 'login' , component:  LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
