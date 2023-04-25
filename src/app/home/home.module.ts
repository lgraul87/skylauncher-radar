import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { LoginModule } from '../login/login.module';
import { CreateAccountModule } from '../create-account/create-account.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, LoginModule, CreateAccountModule]
})

export class HomeModule { }
