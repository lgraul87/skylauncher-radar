import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  login!: any;
  loginForm!: FormGroup;
  isSubmited = false;

  constructor(private firestore: Firestore, private router: Router) { };

  ngOnInit(): void {
    this.initRegisterForm();
  }

  private initRegisterForm() {

    this.loginForm = new FormGroup({

      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [

        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])

    });

  }

  async submitForm(form: FormGroup) {

    this.isSubmited = true;

    if (form.valid) {
      const login = {
        email: form.value.email,
        password: form.value.password,
      };

      const coleccion = query(collection(this.firestore, 'account'), where('email', '==', login.email), where('password', '==', login.password))
      const documentos = await getDocs(coleccion);

      if (documentos.docs.length == 1) {
        sessionStorage.setItem('userLogged', login.email);
        this.router.navigate(['radar']);

      } else {
        this.router.navigate(['error-login']);
      }

    } else {
      this.initRegisterForm();
    }

  }

}
