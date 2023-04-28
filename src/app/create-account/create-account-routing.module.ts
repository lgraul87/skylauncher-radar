import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './component/create-account.component';
import { CreateAccountErrorComponent } from './create-account-error/create-account-error.component';
import { CreateAccountSuccessComponent } from './create-account-success/create-account-success.component';

const routes: Routes = [
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  {
    path:'error-create-account',
    component: CreateAccountErrorComponent
  },
  {
    path:'create-account-success',
    component: CreateAccountSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAccountRoutingModule { }
