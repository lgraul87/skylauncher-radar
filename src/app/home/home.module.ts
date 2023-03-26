import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [HomeComponent,LoginComponent,CreateAccountComponent],
  imports: [CommonModule, LoginRoutingModule]
})
export class HomeModule { }
