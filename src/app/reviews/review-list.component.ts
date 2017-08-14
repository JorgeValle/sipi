import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Review }        from './review';
import { ReviewService } from './review.service';

@Component({
	selector: 'review-list',
	templateUrl: './review-list.component.html',
	styleUrls: [ './review-list.component.css' ],
	providers: [ReviewService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class ReviewListComponent implements OnInit {
	
	reviews: Review[];
	review: Review;
	
	constructor(
		private reviewService: ReviewService,
		private route: ActivatedRoute,
		private location: Location
	) {}
	
	getReviews(): void {
		this.reviewService
		.getReviews()
		.then(reviews => this.reviews = reviews);
	}
	
	ngOnInit(): void {
		this.getReviews();
	}

}