import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ErrorRegisterComponent } from './create-account/error-register/error-register.component';
import { ErrorLoginComponent } from './login/error-login/error-login.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'create-account',
    component: CreateAccountComponent
  },
  {
    path:'error-register',
    component: ErrorRegisterComponent
  },
  {path:'error-login',
  component: ErrorLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
