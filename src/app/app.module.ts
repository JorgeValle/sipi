// this file is the root module, and every app needs to have at least one
// features are usually modules, cohesive blocks of code dedicated to an application domain

// importing modules here allows access to these services from anywhere in the app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// pages
import { HomePageComponent } from './pages/home-page.component';

// places
import { PlaceListComponent }      from './places/place-list.component';
import { PlaceDetailComponent }  from './places/place-detail.component';
import { RelatedPlacesListComponent } from './places/related-places-list.component';

// reviews
import { ReviewListComponent } from './reviews/review-list.component';

// categories
import { CategoriesListComponent } from './categories/categories-list.component';

// menus
import { MainMenuComponent } from './menus/main-menu.component';
import { UserMenuComponent } from './menus/user-menu.component';
import { PaginationMenuComponent } from './menus/pagination-menu.component';
import { BreadcrumbMenuComponent } from './menus/breadcrumb-menu.component';

// forms
import { AddPlaceFormComponent } from './forms/add-place-form.component';
import { FilterRestaurantFormComponent } from './forms/filter-restaurant-form.component';
import { SignUpFormComponent } from './forms/sign-up-form.component';
import { SignInFormComponent } from './forms/sign-in-form.component';
import { SearchFormComponent } from './forms/search-form.component';

// buttons
import { RegisterButtonComponent } from './buttons/register-button.component';

// progress bar
import { ProgressBarComponent } from './progress-bars/progress-bar.component';

// ads
import { LeaderboardAdComponent } from './ads/leaderboard-ad.component';
import { LargeRectangleAdComponent } from './ads/large-rectangle-ad.component';

import { AppComponent } from './app.component';

// the router logs activity in the browser's history journal so the back and forward buttons work as well
const appRoutes: Routes = [
	// first match wins strategy
	{ path: '', component: HomePageComponent },
	{ path: 'lugar/:id', component: PlaceDetailComponent },
	{ path: 'categoria', component: PlaceListComponent },
	{ path: 'registro', component: SignUpFormComponent },
	{ path: 'inicio', component: SignInFormComponent }
	// { path: 'hero/:id',      component: HeroDetailComponent },
	// {
	// path: 'heroes',
	// component: HeroListComponent,
	// data: { title: 'Heroes List' }
	// },
	// { path: '',
	// redirectTo: '/heroes',
	// pathMatch: 'full'
	// },
	// { path: '**', component: PageNotFoundComponent }
];

// an NgModule, whether a root or feature, is a class with an @NgModule decorator
@NgModule({
	// the view classes that belong to this module
	declarations: [
		AppComponent,
		PlaceDetailComponent,
		PlaceListComponent,
		RelatedPlacesListComponent,
		ReviewListComponent,
		CategoriesListComponent,
		MainMenuComponent,
		UserMenuComponent,
		PaginationMenuComponent,
		RegisterButtonComponent,
		AddPlaceFormComponent,
		FilterRestaurantFormComponent,
		SignUpFormComponent,
		SignInFormComponent,
		SearchFormComponent,
		BreadcrumbMenuComponent,
		ProgressBarComponent,
		HomePageComponent,
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
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		)
	],
	// creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app
	// register app-wide services in the root AppModule [providers]
	providers: [],
	// launch the app by bootstrapping the root module
	bootstrap: [AppComponent]
})

// for illustrative purposes only, a root module has no reason to export anything because other components don't need to import the root module
export class AppModule { }
