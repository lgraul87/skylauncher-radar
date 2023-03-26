import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import ('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'radar',
    loadChildren:()=> import ('./radar/radar.module').then(m => m.RadarModule)
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
