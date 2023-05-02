import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-error',
  templateUrl: './create-account-error.component.html',
  styleUrls: ['./create-account-error.component.scss']
})
export class CreateAccountErrorComponent implements OnInit {

  gmail!: '';


  @Input()
  email:any;

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
    this.imprime
  }
  imprime(){
    this.gmail = this.email;

    console.log(this.gmail);
    
    return this.gmail
  }
  
  navigateToCreateAccount() {
    this.router.navigate(['create-account'])
  }

}
