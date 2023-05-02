import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-error',
  templateUrl: './create-account-error.component.html',
  styleUrls: ['./create-account-error.component.scss']
})
export class CreateAccountErrorComponent implements OnInit {

  email= sessionStorage.getItem('email');

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  
  navigateToCreateAccount() {

    sessionStorage.setItem('email','');
    sessionStorage.setItem('userLogged','');
    this.email = '';
    this.router.navigate(['create-account'])

  }

}
