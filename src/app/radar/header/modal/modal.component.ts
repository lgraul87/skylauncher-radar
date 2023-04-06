import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { collection, doc, setDoc } from 'firebase/firestore';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	providers: [NgbModalConfig, NgbModal]
})

export class ModalComponent implements OnInit {

	profiles!: any;
	profileForm!: FormGroup;
	deleteProfileForm!: FormGroup;

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

	open(content: any) {
		this.modalService.open(content);
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
