import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './component/create-account.component';
import { CreateAccountErrorComponent } from './create-account-error/create-account-error.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateAccountComponent, CreateAccountErrorComponent],
  imports: [CommonModule, CreateAccountRoutingModule, ReactiveFormsModule],
  exports: [CreateAccountComponent]
})

export class CreateAccountModule { }
