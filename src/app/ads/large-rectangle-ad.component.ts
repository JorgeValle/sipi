import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({
	selector: 'large-rectangle-ad',
	templateUrl: './large-rectangle-ad.component.html',
	styleUrls: [ './large-rectangle-ad.component.css' ],
	//providers: [PlaceService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enable the user experience, nothing more
// components should be lean
export class LargeRectangleAdComponent {
	
	logTheThing(): void {
		console.log("Wont work");
	};
  
	

}