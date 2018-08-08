// Angular app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';

// Sipi services
import {
  CategoryService,
  CityService,
  CountryService,
  MapService,
  PageService,
  PlaceService,
  ReviewService,
  UserService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CategoryService,
    CityService,
    CountryService,
    MapService,
    PageService,
    PlaceService,
    ReviewService,
    UserService
  ],
  declarations: []
})
export class CoreModule { }