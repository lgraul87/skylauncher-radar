import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { DocumentData, QueryDocumentSnapshot, collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login!: any;
  loginForm!: FormGroup;
  isSubmited = false;

  constructor(
    private firestore: Firestore,
    private router: Router
  ) { };

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
      console.log(documentos.docs.length);
      if(documentos.docs.length == 1){
            this.router.navigate(['radar']);
            this.initRegisterForm();       
      }else{
        this.router.navigate(['error-login']);
        this.initRegisterForm();
      }
    } else {
      this.initRegisterForm();
    }
  }
}
