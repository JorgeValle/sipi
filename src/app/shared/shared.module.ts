// Angular modules
import { NgModule } from '@angular/core';
import { 
  FormsModule,
  ReactiveFormsModule 
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Sipi components
import {
  ErrorAlertComponent,
  InfoAlertComponent,
  SuccessAlertComponent,
  AddPlaceButtonComponent,
  LogInButtonComponent,
  ReviewButtonComponent,
  SignUpButtonComponent,
  BreadcrumbMenuComponent,
  PaginationMenuComponent,
  ShareModalComponent,
  SignUpModalComponent,
  ProgressBarComponent,
  SearchFormComponent
} from './components';

// Sipi layout
import {
  MastheadComponent,
  FooterComponent
} from './layout';

// Sipi pipes
import {
  AgoPipe,
  MeridiemPipe,
  PhonePipe,
  UrlizePipe
} from './pipes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ErrorAlertComponent,
    InfoAlertComponent,
    SuccessAlertComponent,
    AddPlaceButtonComponent,
    LogInButtonComponent,
    ReviewButtonComponent,
    SignUpButtonComponent,
    BreadcrumbMenuComponent,
    PaginationMenuComponent,
    ShareModalComponent,
    SignUpModalComponent,
    ProgressBarComponent,
    SearchFormComponent,
    MastheadComponent,
    FooterComponent,
    AgoPipe,
    MeridiemPipe,
    PhonePipe,
    UrlizePipe
  ],
  exports: [
    ErrorAlertComponent,
    InfoAlertComponent,
    SuccessAlertComponent,
    AddPlaceButtonComponent,
    LogInButtonComponent,
    ReviewButtonComponent,
    SignUpButtonComponent,
    BreadcrumbMenuComponent,
    PaginationMenuComponent,
    ShareModalComponent,
    SignUpModalComponent,
    ProgressBarComponent,
    SearchFormComponent,
    MastheadComponent,
    FooterComponent,
    AgoPipe,
    MeridiemPipe,
    PhonePipe,
    UrlizePipe
  ]
})
export class SharedModule {}