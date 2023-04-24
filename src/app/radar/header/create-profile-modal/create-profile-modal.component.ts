import { Component, OnInit, ViewChild } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
		private router: Router,
		private firestore: Firestore,
		config: NgbModalConfig,
		private modalService: NgbModal) {
		config.backdrop = 'static';
		config.keyboard = false;
		
	}

	ngOnInit(): void {
		this.initProfileForm();
	}
	open(content: any) {
		this.modalService.open(content);
	}

	private initProfileForm() {
		this.profileForm = new FormGroup({
			currentProfile: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(15),
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
		this.isSubmited = true;

		if (form.valid) {
			const profile = {
				currentProfile: form.value.currentProfile,
				profile: form.value.profile,
				description: form.value.description
			};
			this.profile = profile;

			const q = collection(this.firestore, "user")
			const sendSnapshot = await getDocs(q);
			sendSnapshot.forEach((sendSnapshotdoc) => {

				if ((sendSnapshotdoc.data()['profile'] == profile.profile)) {
					
					this.router.navigate(['radar/error-profile'])

				} else {
					setDoc(doc(this.firestore, "user/" + profile.profile), profile);
					this.router.navigate(['radar'])
				}
			});
		}else {
		};
	}
}