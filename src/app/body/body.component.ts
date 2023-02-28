import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { collection, doc, setDoc } from 'firebase/firestore';
import { profileDto } from '../interfaces/profile.dto';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: ['./body.component.scss'],
	providers: [DecimalPipe]
})
export class BodyComponent implements OnInit {

	profiles!: any;
	profileForm!: FormGroup;

	constructor(
		private firestore: Firestore) {
	}

	ngOnInit(): void {
		this.getDataTable();
		this.initProfileForm();
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

	submitForm(form: FormGroup) {
		if (form.valid) {
			const profile = {
				currentProfile: form.value.currentProfile,
				profile: form.value.profile,
				description: form.value.description
			};
			setDoc(doc(this.firestore, "user/" + profile.profile), profile);

		} else {
			alert('Por favor, introduzca datos para todos los campos... y con un minimo de 3 caracteres y un maximo de 30. Gracias.');
		}

	}
}
