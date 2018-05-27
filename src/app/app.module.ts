// Angular core
import { AppRoutingModule }                          from './app-routing.module';
import { BrowserModule, Title }                      from '@angular/platform-browser';
import { BrowserAnimationsModule }                   from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule }          from '@angular/forms';
import { RouterModule, Routes }                      from '@angular/router';
import { HttpModule }                                from '@angular/http';
import { HttpClientModule }                          from '@angular/common/http';
import { InMemoryWebApiModule }                      from 'angular-in-memory-web-api';
import { InMemoryDataService }                       from './in-memory-data.service';
import { NgModule }                                  from '@angular/core';

// ads
import { LargeRectangleAdComponent } from './components/ads/large-rectangle-ad.component';
import { LeaderboardAdComponent }    from './components/ads/leaderboard-ad.component';

// alerts
import { ErrorAlertComponent }   from './components/alerts/error-alert.component';
import { InfoAlertComponent }    from './components/alerts/info-alert.component';
import { SuccessAlertComponent } from './components/alerts/success-alert.component';

// buttons
import { AddPlaceButtonComponent }     from './components/buttons/add-place-button.component';
import { LogInButtonComponent }        from './components/buttons/log-in-button.component';
import { ReviewButtonComponent }       from './components/buttons/review-button.component';
import { SignUpButtonComponent }       from './components/buttons/sign-up-button.component';
import { SubmitReviewButtonComponent } from './components/buttons/submit-review-button.component';

// categories
import { CategoriesListComponent } from './components/categories/categories-list.component';

// countries
import { CountriesListComponent } from './components/countries/countries-list.component';

// forms
import { AddPlaceFormComponent }              from './components/forms/add-place-form.component';
import { ClaimPlaceFormComponent }            from './components/forms/claim-place-form.component';
import { ContactFormComponent }               from './components/forms/contact-form.component';
import { EditPlaceFormComponent }             from './components/forms/edit-place-form.component';
import { EditUserFormComponent }              from './components/forms/edit-user-form.component';
import { FilterPlacesFormComponent }          from './components/forms/filter-places-form.component';
import { ForgotPasswordFormComponent }        from './components/forms/forgot-password-form.component';
import { ReviewPlaceFormComponent }           from './components/forms/review-place-form.component';
import { RequestUserDeletionFormComponent }   from './components/forms/request-user-deletion-form.component';
import { SearchFormAComponent }               from './components/forms/search-form-a.component';
import { SearchFormBComponent }               from './components/forms/search-form-b.component';
import { SignInFormComponent }                from './components/forms/sign-in-form.component';
import { SignUpFormComponent }                from './components/forms/sign-up-form.component';
import { SortPlacesFormComponent }            from './components/forms/sort-places-form.component';
import { UpdateEmailSettingsFormComponent }   from './components/forms/update-email-settings-form.component';
import { UpdatePrivacySettingsFormComponent } from './components/forms/update-privacy-settings-form.component';
import { UploadUserPhotoFormComponent }       from './components/forms/upload-user-photo-form.component';

// maps
import { MultiMarkerMapComponent }  from './components/maps/multi-marker-map.component';
import { SingleMarkerMapComponent } from './components/maps/single-marker-map.component';

// menus
import { BreadcrumbMenuComponent } from './components/menus/breadcrumb-menu.component';
import { MainMenuAComponent }      from './components/menus/main-menu-a.component';
import { MainMenuBComponent }      from './components/menus/main-menu-b.component';
import { MainMenuAuthComponent }   from './components/menus/main-menu-auth.component';
import { PaginationMenuComponent } from './components/menus/pagination-menu.component';

// modals
import { FilterModalComponent } from './components/modals/filter-modal.component';
import { SignUpModalComponent } from './components/modals/sign-up-modal.component';
import { ShareModalComponent }  from './components/modals/share-modal.component';

// pages
import { AboutPageComponent }       from './components/pages/about-page.component';
import { AdvertisingPageComponent } from './components/pages/advertising-page.component';
import { CategoryPageComponent }    from './components/pages/category-page.component';
import { HomePageComponent }        from './components/pages/home-page.component';
import { PageDetailComponent }      from './components/pages/page-detail.component';
import { SignInPageComponent }      from './components/pages/sign-in-page.component';
import { SignUpPageComponent }      from './components/pages/sign-up-page.component';
import { SnapshotPageComponent }    from './components/pages/snapshot-page.component';

// pipes
import { AgoPipe }         from './pipes/ago.pipe';
import { DynamicDatePipe } from './pipes/dynamicDate.pipe';
import { PhonePipe }       from './pipes/phone.pipe';
import { PlaceFilterPipe } from './pipes/place-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';

// places
import { PlaceCardComponent }           from './components/places/place-card.component';
import { PlaceCardFeaturedComponent }   from './components/places/place-card-featured.component';
import { PlaceCardSimpleComponent }     from './components/places/place-card-simple.component';
import { PlaceDetailComponent }         from './components/places/place-detail.component';
import { PlaceDetailEditComponent }     from './components/places/place-detail-edit.component';
import { PlaceDetailProfileComponent }  from './components/places/place-detail-profile.component';
import { PlaceListComponent }           from './components/places/place-list.component';
import { PlaceScheduleComponent }       from './components/places/place-schedule.component';
import { SuggestedPlacesListComponent } from './components/places/suggested-places-list.component';

// progress bar
import { ProgressBarComponent } from './components/progress-bars/progress-bar.component';

// reviews
import { ReviewCardComponent } from './components/reviews/review-card.component';
import { ReviewListComponent } from './components/reviews/review-list.component';

// sitemap
import { SitemapComponent } from './components/sitemap/sitemap.component';

// services
import { AlertService }          from './services/alert.service';
import { CategoryService }       from './services/category.service';
import { CategoryFilterService } from './services/category-filter.service';
import { DistanceService }       from './services/distance.service';
import { ImageService }          from './services/image.service';
import { LocationService }       from './services/location.service';
import { WindowService }         from './services/window.service';
import { SubcategoryService }    from './services/subcategory.service';

// third party
import { NgxPaginationModule }                    from 'ngx-pagination';
import { Ng2CompleterModule }                     from 'ng2-completer';
import { Ng2AutoCompleteModule, Ng2AutoComplete } from 'ng2-auto-complete';
import { OrderModule }                            from 'ngx-order-pipe';
import { NguiAutoCompleteModule }                 from '@ngui/auto-complete';
import { FileUploadModule }                       from 'ng2-file-upload';
import { Ng4FilesModule }                         from 'angular4-files-upload';

// users
import { LatestUsersComponent }        from './components/users/latest-users.component';
import { UserActivityCardComponent }   from './components/users/user-activity-card.component';
import { UserActivityListComponent }   from './components/users/user-activity-list.component';
import { UserDetailComponent }         from './components/users/user-detail.component';
import { UserDetailPlacesComponent }   from './components/users/user-detail-places.component';
import { UserDetailProfileComponent }  from './components/users/user-detail-profile.component';
import { UserDetailSettingsComponent } from './components/users/user-detail-settings.component';

// ...and finally the app
import { AppComponent } from './app.component';

// the router logs activity in the browser's history journal so the back and forward buttons work as well
const appRoutes: Routes = [
  // first match wins strategy
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'snapshot',
    component: SnapshotPageComponent
  },
  {
    path: 'ciudades',
    component: CategoryPageComponent
  },
  {
    path: 'usuario',
    component: UserDetailComponent
  },
  // places
  {
    path: 'lugar/:id',
    component: PlaceDetailComponent
  },
  // users
  {
    path: 'usuario/:id',
    component: UserDetailComponent
  },
  {
    path: 'busqueda',
    component: PlaceListComponent
  },
  {
    path: 'inscribir',
    component: SignUpPageComponent
  },
  {
    path: 'acceder',
    component: SignInPageComponent
  },
  { 
    path: 'recomponer-contrasena',
    component: ForgotPasswordFormComponent
  },
  {
    path: 'agregar-lugar',
    component: AddPlaceFormComponent
  },
  {
    path: 'sobre',
    component: AboutPageComponent
  },
  {
    path: 'publicidad',
    component: AdvertisingPageComponent
  },
  {
    path: 'sitemap.xml',
    component: SitemapComponent
  },
  // all pages
  {
    path: ':slug',
    component: PageDetailComponent
  }
];

// an NgModule, whether a root or feature, is a class with an @NgModule decorator
@NgModule({
  // the view classes that belong to this module
  declarations: [
    AppComponent,
    UserDetailComponent,
    // ads
    LargeRectangleAdComponent,
    LeaderboardAdComponent,
    // alerts
    ErrorAlertComponent,
    InfoAlertComponent,
    SuccessAlertComponent,
    // buttons
    AddPlaceButtonComponent,
    SignUpButtonComponent,
    ReviewButtonComponent,
    LogInButtonComponent,
    SubmitReviewButtonComponent,
    // categories
    CategoriesListComponent,
    // countries
    CountriesListComponent,
    BreadcrumbMenuComponent,
    ProgressBarComponent,
    // forms
    AddPlaceFormComponent,
    ClaimPlaceFormComponent,
    ContactFormComponent,
    EditPlaceFormComponent,
    EditUserFormComponent,
    FilterPlacesFormComponent,
    ForgotPasswordFormComponent,
    ReviewPlaceFormComponent,
    RequestUserDeletionFormComponent,
    SearchFormAComponent,
    SearchFormBComponent,
    SignInFormComponent,
    SignUpFormComponent,
    SortPlacesFormComponent,
    UpdateEmailSettingsFormComponent,
    UpdatePrivacySettingsFormComponent,
    UploadUserPhotoFormComponent,
    // maps
    MultiMarkerMapComponent,
    SingleMarkerMapComponent,
    // menus
    MainMenuAComponent,
    MainMenuAuthComponent,
    MainMenuBComponent,
    PaginationMenuComponent,
    // modals
    FilterModalComponent,
    SignUpModalComponent,
    ShareModalComponent,
    // pages
    AboutPageComponent,
    AdvertisingPageComponent,
    CategoryPageComponent,
    HomePageComponent,
    PageDetailComponent,
    SignInPageComponent,
    SignUpPageComponent,
    SnapshotPageComponent,
    // pipes
    AgoPipe,
    DynamicDatePipe,
    PhonePipe,
    PlaceFilterPipe,
    PriceFilterPipe,
    // places
    PlaceCardComponent,
    PlaceCardFeaturedComponent,
    PlaceCardSimpleComponent,
    PlaceDetailComponent,
    PlaceDetailEditComponent,
    PlaceDetailProfileComponent,
    PlaceListComponent,
    PlaceScheduleComponent,
    SuggestedPlacesListComponent,
    // reviews
    ReviewCardComponent,
    ReviewListComponent,
    // users
    LatestUsersComponent,
    UserActivityCardComponent,
    UserActivityListComponent,
    UserDetailComponent,
    UserDetailPlacesComponent,
    UserDetailProfileComponent,
    UserDetailSettingsComponent,
    // sitemap
    SitemapComponent
  ],
  // other modules whose exported classes are needed by component templates declared in this module
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true  // allows real endpoints that are not in in-memory api
    }),
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // third party
    NgxPaginationModule,
    Ng2AutoCompleteModule,
    Ng2CompleterModule,
    OrderModule,
    NguiAutoCompleteModule,
    FileUploadModule,
    Ng4FilesModule
  ],
  // creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app
  // register app-wide services in the root AppModule [providers]
  providers: [
    AlertService,
    DistanceService,
    CategoryService,
    CategoryFilterService,
    ImageService,
    LocationService,
    Title,
    WindowService,
    SubcategoryService
  ],
  // launch the app by bootstrapping the root module
  bootstrap: [AppComponent]
})

// for illustrative purposes only, a root module has no reason to export anything because other components don't need to import the root module
export class AppModule { }