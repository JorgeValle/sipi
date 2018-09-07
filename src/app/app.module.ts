// Angular modules
import { AppRoutingModule }                          from './app-routing.module';
import { BrowserModule, Title }                      from '@angular/platform-browser';
import { BrowserAnimationsModule }                   from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule }          from '@angular/forms';
import { RouterModule, Routes }                      from '@angular/router';
import { HttpModule }                                from '@angular/http';
import { HttpClientModule }                          from '@angular/common/http';
import { NgModule }                                  from '@angular/core';

// Sipi modules
import { CategoryModule } from './categories/category.module';
import { CoreModule }     from './core/core.module'; // only this root AppModule should import CoreModule
import { CountryModule }  from './countries/country.module';
import { MapModule }      from './maps/map.module';
import { PageModule }     from './pages/page.module';
import { PlaceModule }    from './places/place.module';
import { ReviewModule }   from './reviews/review.module';
import { SharedModule }   from './shared/shared.module';
import { UserModule }     from './users/user.module';

// Third party modules
import { NgxPaginationModule }  from 'ngx-pagination';
import { OrderModule }          from 'ngx-order-pipe';
import { NgAutoCompleteModule } from 'ng-auto-complete';

// Angular Universal
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser }           from '@angular/common';

// ...and finally the app
import { AppComponent }        from './app.component';;
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment }         from '../environments/environment'

@NgModule({
  // the view classes that belong to this module
  declarations: [],
  // other modules whose exported classes are needed by component templates declared in this module
  imports: [
    CategoryModule,
    CoreModule,
    CategoryModule,
    MapModule,
    PageModule,
    PlaceModule,
    ReviewModule,
    SharedModule,
    UserModule
  ],
  // creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app
  // register app-wide services in the root AppModule [providers]
  providers: [],
  // launch the app by bootstrapping the root module
  bootstrap: [AppComponent]
})

// for illustrative purposes only, a root module has no reason to export anything because other components don't need to import the root module
export class AppModule { }