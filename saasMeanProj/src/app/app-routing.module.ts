import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:"dash", component:DashboardComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"update/:id", component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
