import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Review }        from './review';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'review-list',
  templateUrl: './review-list.component.html',
  providers: [ReviewService]
})

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

  }

  ngOnInit(): void {
    this.getReviews();
  }

}