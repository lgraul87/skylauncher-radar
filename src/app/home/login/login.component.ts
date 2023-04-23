import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore';
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
    this.isSubmited  = true;
    if (form.valid) {
      const login = {
        email: form.value.email,
        password: form.value.password,
      };

      const q = collection(this.firestore, "account") 
      const sendSnapshot = await getDocs(q);
      sendSnapshot.forEach((sendSnapshotdoc) => {

        if((sendSnapshotdoc.data()['email'] == login.email)&&(sendSnapshotdoc.data()['password'] == login.password)){
          this.router.navigate(['radar'])
        }else{
          this.router.navigate(['error-login'])
           
        }
      });
      this.initRegisterForm();

    } else {
      
    }
  }

}
