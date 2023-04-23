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

  constructor(
    private router : Router,
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
    if (form.valid) {
      const register = {
        email: form.value.email,
        password: form.value.password,
      };
      const q = collection(this.firestore, "account") 
      const sendSnapshot = await getDocs(q);
      sendSnapshot.forEach((sendSnapshotdoc) => {

        if(sendSnapshotdoc.data()['email'] == register.email){
          console.log('terrible');
          this.router.navigate(['error-register'])
        }else{
           setDoc(doc(this.firestore, "account/" + register.email), register);
           this.router.navigate(['radar'])
        }
      });
      this.initRegisterForm();

    } else {
      alert('Por favor, introduzca datos para todos los campos... y con un minimo de 3 caracteres y un maximo de 30. Gracias.');
    }
  }


}
