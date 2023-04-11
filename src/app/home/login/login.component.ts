import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore/public_api';
import {  FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 

  login!:any;
  loginForm!:FormGroup;


constructor(
  private firestore: Firestore,
){};

ngOnInit(): void {
  this.getDataTable();
  this.initRegisterForm();
}

private getDataTable() {
  const login = collection(this.firestore, "user");
  collectionData(login).subscribe(data => {
    this.login = data;
  });
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
submitForm(form: FormGroup) {
  if (form.valid) {
    const login = {
      email: form.value.email,
      password: form.value.password,
    };
    console.log(form.value);
    setDoc(doc(this.firestore, "user/" + login.email), login);
    // Esto ta mal arreglar 

  } else {
    alert('Por favor, introduzca datos para todos los campos... y con un minimo de 3 caracteres y un maximo de 30. Gracias.');
  }
}

}
