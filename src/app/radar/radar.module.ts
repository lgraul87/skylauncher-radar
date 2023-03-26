import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { RadarRoutingModule } from './radar-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RadarComponent } from './component/radar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [RadarComponent, HeaderComponent, BodyComponent, FooterComponent],
  imports: [
    CommonModule,
    RadarRoutingModule,
    NgbModule,
    DecimalPipe,
    NgFor,
    AsyncPipe,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())]
})
export class RadarModule { }
