import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('userLogged')!.length < 3){
      this.router.navigate(['']);
    }
  }

}
