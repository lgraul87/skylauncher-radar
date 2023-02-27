import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import {  collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';






@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: ['./body.component.scss'],
	providers: [DecimalPipe]
})
export class BodyComponent implements OnInit {


	
	profiles: any;

	constructor(

		private firestore: Firestore) {

		
			
	}

	ngOnInit(): void {
	
		const profiles = collection(this.firestore, "user");
		collectionData(profiles).subscribe((data: any) => {
			this.profiles = data;
		});

	}

}
