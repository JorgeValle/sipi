// Angular core
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';
import { Meta, Title }              from '@angular/platform-browser';

// Sipi custom
import { Place }        from './place';
import { PlaceService } from '../../services/place.service';

// Third party
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'place-detail-profile',
  templateUrl: './place-detail-profile.component.html',
  providers: [
    PlaceService
  ]
})

export class PlaceDetailProfileComponent implements OnInit {

  @Input() place: Place;

  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    private meta: Meta
  ) {}

  /**
   * Sets the document title
   */
  setTitle(newTitle:string) {
    this.titleService.setTitle(newTitle);
  }

  /**
   * On Init
   */
  ngOnInit(): void {
    
  }

  /**
   * functionality to share place
   */
  sharePlace(): void {
    console.log('Share place dialog was opened');
  }

}