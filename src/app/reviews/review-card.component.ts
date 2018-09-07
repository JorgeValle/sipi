// Angular core
import { Component, Input, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap }        from '@angular/router';
import { Location }                        from '@angular/common';

// Sipi custom
import { Review }        from './review';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'review-card',
  templateUrl: './review-card.component.html',
  providers: [
    ReviewService
  ]
})

// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class ReviewCardComponent implements OnInit {

  reviews: Review[];

  @Input() review: Review;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

  }

}