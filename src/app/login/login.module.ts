import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { ErrorLoginComponent } from './error-login/error-login.component';
import { LoginComponent } from './component/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[LoginComponent, ErrorLoginComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
  exports:[LoginComponent]
})
export class LoginModule { }
