import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-create-profile',
  templateUrl: './error-create-profile.component.html',
  styleUrls: ['./error-create-profile.component.scss']
})
export class ErrorCreateProfileComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  navigateRadar() {
    this.router.navigate(['radar'])

  }
}
