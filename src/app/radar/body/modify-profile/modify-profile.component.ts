import { Component, Input, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { collection, doc, updateDoc } from 'firebase/firestore';

@Component({
	selector: 'app-modify-profile',
	templateUrl: './modify-profile.component.html',
	styleUrls: ['./modify-profile.component.scss']
})
export class ModifyProfileComponent implements OnInit {
	updateProfile = {};
	updateProfileForm!: FormGroup;
	isSubmited = false;
	profiles!: any;
	profile = '';

	@Input()
	profileToEdit: any;

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

		this.profile = this.profileToEdit.profile;

		this.updateProfileForm = new FormGroup({
			currentProfile: new FormControl(this.profileToEdit.currentProfile, [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(30),
			]),
			description: new FormControl(this.profileToEdit.description, [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(300),
			]),
		});
	}

	async updateForm(form: FormGroup) {

		this.isSubmited = true;

		if (form.valid) {
			const updateProfile = {
				currentProfile: form.value.currentProfile,
				description: form.value.description
			}
			const updateForm = doc(this.firestore, "user/" + this.profileToEdit.profile);
			await updateDoc(updateForm, {
				currentProfile: updateProfile.currentProfile,
				description: updateProfile.description
			});
		} else {

		}
	}
}
