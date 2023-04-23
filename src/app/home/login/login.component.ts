import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login!: any;
  loginForm!: FormGroup;


  constructor(
    private firestore: Firestore,
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
    if (form.valid) {
      const login = {
        email: form.value.email,
        password: form.value.password,
      };

      const di = doc(this.firestore, "account/");

      console.log(di);
      


      // setDoc(doc(this.firestore, "user/" + login.email), login);
      // Esto ta mal arreglar 

    } else {
      const q = query(collection(this.firestore,"account"))      

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      // alert('Por favor, introduzca datos para todos los campos... y con un minimo de 3 caracteres y un maximo de 30. Gracias.');
    }
  }

}
