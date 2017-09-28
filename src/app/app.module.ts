// this file is the root module, and every app needs to have at least one
// features are usually modules, cohesive blocks of code dedicated to an application domain

// importing modules here allows access to these services from anywhere in the app
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// importing a service
import { DistanceService } from './distances/distance.service';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// users
import { UserDetailComponent } from './users/user-detail.component';

// pages
import { HomePageComponent } from './pages/home-page.component';
import { PageDetailComponent } from './pages/page-detail.component';

// places
import { PlaceListComponent }      from './places/place-list.component';
import { PlaceDetailComponent }  from './places/place-detail.component';
import { PlaceScheduleComponent }  from './places/place-schedule.component';
import { SuggestedPlacesListComponent } from './places/suggested-places-list.component';

// reviews
import { ReviewListComponent } from './reviews/review-list.component';

// categories
import { CategoriesListComponent } from './categories/categories-list.component';

// countries
import { CountriesListComponent } from './countries/countries-list.component';

// menus
import { MainMenuAComponent } from './menus/main-menu-a.component';
import { MainMenuBComponent } from './menus/main-menu-b.component';
import { UserMenuComponent } from './menus/user-menu.component';
import { PaginationMenuComponent } from './menus/pagination-menu.component';
import { BreadcrumbMenuComponent } from './menus/breadcrumb-menu.component';

// forms
import { ReviewPlaceFormComponent } from './forms/review-place-form.component';
import { AddPlaceFormComponent } from './forms/add-place-form.component';
import { FilterPlacesFormComponent } from './forms/filter-places-form.component';
import { SignUpFormComponent } from './forms/sign-up-form.component';
import { SignInFormComponent } from './forms/sign-in-form.component';
import { SearchFormAComponent } from './forms/search-form-a.component';
import { SearchFormBComponent } from './forms/search-form-b.component';

// buttons
import { SignUpButtonComponent } from './buttons/sign-up-button.component';
import { LogInButtonComponent } from './buttons/log-in-button.component';
import { ReviewButtonComponent } from './buttons/review-button.component';
import { SubmitReviewButtonComponent } from './buttons/submit-review-button.component';

// messages
import { SuccessMessageComponent } from './messages/success-message.component';
import { ErrorMessageComponent } from './messages/error-message.component';
import { InfoMessageComponent } from './messages/info-message.component';

// progress bar
import { ProgressBarComponent } from './progress-bars/progress-bar.component';

// ads
import { LeaderboardAdComponent } from './ads/leaderboard-ad.component';
import { LargeRectangleAdComponent } from './ads/large-rectangle-ad.component';

// auto completer
import { Ng2CompleterModule } from "ng2-completer";

import { AppComponent } from './app.component';

// the router logs activity in the browser's history journal so the back and forward buttons work as well
const appRoutes: Routes = [
  // first match wins strategy
  { path: '', component: HomePageComponent },
  { path: 'usuario', component: UserDetailComponent },
  { path: 'lugar/:id', component: PlaceDetailComponent },
  { path: 'busqueda', component: PlaceListComponent },
  { path: 'registro', component: SignUpFormComponent },
  { path: 'inicio', component: SignInFormComponent },
  { path: 'agregar-lugar', component: AddPlaceFormComponent },
  { path: ':pagina', component: PageDetailComponent }
];

// an NgModule, whether a root or feature, is a class with an @NgModule decorator
@NgModule({
  // the view classes that belong to this module
  declarations: [
    AppComponent,
    UserDetailComponent,
    // messages
    SuccessMessageComponent,
    ErrorMessageComponent,
    InfoMessageComponent,
    // places
    PlaceDetailComponent,
    PlaceListComponent,
    PlaceScheduleComponent,
    SuggestedPlacesListComponent,
    ReviewListComponent,
    CategoriesListComponent,
    MainMenuAComponent,
    MainMenuBComponent,
    UserMenuComponent,
    PaginationMenuComponent,
    // buttons
    SignUpButtonComponent,
    ReviewButtonComponent,
    LogInButtonComponent,
    SubmitReviewButtonComponent,
    // forms
    AddPlaceFormComponent,
    ReviewPlaceFormComponent,
    FilterPlacesFormComponent,
    SignUpFormComponent,
    SignInFormComponent,
    SearchFormAComponent,
    SearchFormBComponent,
    // countries
    CountriesListComponent,
    BreadcrumbMenuComponent,
    ProgressBarComponent,
    // pages
    HomePageComponent,
    PageDetailComponent,
    LeaderboardAdComponent,
    LargeRectangleAdComponent
  ],
  // other modules whose exported classes are needed by component templates declared in this module
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    // autocomplete
    Ng2CompleterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  // creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app
  // register app-wide services in the root AppModule [providers]
  providers: [
    DistanceService,
	Title
  ],
  // launch the app by bootstrapping the root module
  bootstrap: [AppComponent]
})

// for illustrative purposes only, a root module has no reason to export anything because other components don't need to import the root module
export class AppModule { }