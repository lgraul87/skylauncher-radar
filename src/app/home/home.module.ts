import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent,LoginComponent,CreateAccountComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule]
})
export class HomeModule { }
