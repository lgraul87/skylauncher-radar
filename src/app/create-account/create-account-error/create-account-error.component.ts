import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-error',
  templateUrl: './create-account-error.component.html',
  styleUrls: ['./create-account-error.component.scss']
})
export class CreateAccountErrorComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  navigateToCreateAccount() {
    this.router.navigate(['create-account'])
  }

}
