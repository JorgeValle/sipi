import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaceDetailComponent }	from './places/place-detail.component';
import { PlaceListComponent }  from './places/place-list.component';



const routes: Routes = [

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
