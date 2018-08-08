

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({
  selector: 'review-button',
  templateUrl: './review-button.component.html',
  //providers: [PlaceService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class ReviewButtonComponent {
  
  showReviewModal(): void {
    console.log("Show review modal");
  };
  
}
