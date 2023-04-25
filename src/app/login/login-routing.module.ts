import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login.component';
import { ErrorLoginComponent } from './error-login/error-login.component';

const routes: Routes = 
[
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'error-login',
    component: ErrorLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
