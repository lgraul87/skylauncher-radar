import { Component, OnInit } from '@angular/core';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  register!: any;
  registerForm!: FormGroup;
  isSubmited = false;

  constructor(
    private router: Router,
    private firestore: Firestore,
  ) { };

  ngOnInit(): void {
    this.getDataTable();
    this.initRegisterForm();
  }
  private getDataTable() {
    const register = collection(this.firestore, "user");
    collectionData(register).subscribe(data => {
      this.register = data;
    });
  }
  private initRegisterForm() {
    this.registerForm = new FormGroup({
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
      const register = {
        email: form.value.email,
        password: form.value.password,
      };



      const coleccion = query(collection(this.firestore, 'account'), where('email', '==', register.email))
      const documentos = await getDocs(coleccion);
      if (documentos.docs.length == 0) {
        setDoc(doc(this.firestore, "account/" + register.email), register);
        this.router.navigate(['create-account-success']);
      } else {
        this.router.navigate(['error-create-account',{email:register.email}]) 
      }
    } else{
    }
  }
}