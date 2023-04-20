import { Component, OnInit } from '@angular/core';
import { collection, doc, setDoc } from 'firebase/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {


  register!: any;
  registerForm!: FormGroup;

  constructor(
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
  submitForm(form: FormGroup) {
    if (form.valid) {
      const register = {
        email: form.value.email,
        password: form.value.password,
      };
      setDoc(doc(this.firestore, "user/" + register.email), register);

      this.initRegisterForm();
      // Esto ta mal arreglar 

    } else {
      alert('Por favor, introduzca datos para todos los campos... y con un minimo de 3 caracteres y un maximo de 30. Gracias.');
    }
  }


}
