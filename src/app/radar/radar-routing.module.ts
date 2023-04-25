import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarComponent } from './component/radar.component';

const routes: Routes = [{ path: '',component: RadarComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RadarRoutingModule { }
