import { Component, OnInit, ViewChild } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { collection, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';

@Component({
	selector: 'app-create-profile',
	templateUrl: './create-profile-modal.component.html',
	styleUrls: ['./create-profile-modal.component.scss'],
	providers: [NgbModalConfig, NgbModal]
})

export class CreateProfileComponent implements OnInit {
	profile = {};
	isSubmited = false;
	profiles!: any;
	profileForm!: FormGroup;

	get description() {
		return this.profileForm.get('description');
	}
	constructor(
		private firestore: Firestore,
		config: NgbModalConfig,
		private modalService: NgbModal) {
		config.backdrop = 'static';
		config.keyboard = false;
	}

	ngOnInit(): void {
		this.getDataTable();
		this.initProfileForm();
	}
	open(content: any) {
		this.modalService.open(content);
	}
	private getDataTable() {
		const profiles = collection(this.firestore, "user");
		collectionData(profiles).subscribe(data => {
			this.profiles = data;
		});
	}

	private initProfileForm() {
		this.profileForm = new FormGroup({
			currentProfile: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(30),
			]),
			profile: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
			description: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
		});
	}
	async submitForm(form: FormGroup) {
		if (form.valid) {
			const profile = {
				currentProfile: form.value.currentProfile,
				profile: form.value.profile,
				description: form.value.description
			};
			this.profile = profile;
			// const di = collection(this.firestore, "user");
			
			// const q = query(di, where(profile.profile, "==", profile.profile));

			// console.log(q);
			

			// const querySnapshot = await getDocs(q);

			// querySnapshot.forEach((doc) => {
			// 	console.log('El id es : '+ doc.id);
			// 	console.log('El data es : '+doc.data());
			// 	console.log('fin');
				
			//   });

			// if(q){
				setDoc(doc(this.firestore, "user/" + profile.profile), profile);
			// 	alert('existe');
			this.initProfileForm();
			// }else{
			// 	setDoc(doc(this.firestore, "user/" + profile.profile), profile);
			// 	this.initProfileForm();			
			// }

		} else {
			alert('Por favor, introduzca datos para todos los campos... y con un minimo de 3 caracteres y un maximo de 30. Gracias.');
		}
	}
}
