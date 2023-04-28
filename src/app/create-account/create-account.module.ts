import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './component/create-account.component';
import { CreateAccountErrorComponent } from './create-account-error/create-account-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAccountSuccessComponent } from './create-account-success/create-account-success.component';

@NgModule({
  declarations: [CreateAccountComponent, CreateAccountErrorComponent, CreateAccountSuccessComponent],
  imports: [CommonModule, CreateAccountRoutingModule, ReactiveFormsModule],
  exports: [CreateAccountComponent]
})

export class CreateAccountModule { }
