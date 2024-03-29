import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarComponent } from './component/radar.component';
import { ErrorCreateProfileComponent } from './create-profile-modal/error-create-profile/error-create-profile.component';

const routes: Routes =
  [
    { path:'', component: RadarComponent },
    { path:'error-profile', component: ErrorCreateProfileComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RadarRoutingModule { }
