import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: ['./body.component.scss'],
	providers: [DecimalPipe, NgbModalConfig, NgbModal]
})
export class BodyComponent implements OnInit {
	
	profiles!: any;
	profileForm!: FormGroup;
	deleteProfileForm!: FormGroup;

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
	modify = false;

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

	async deleteProfile(deleteProfileForm: string) {
		await deleteDoc(doc(this.firestore, "user", deleteProfileForm));
		console.log('1')
	}
}
