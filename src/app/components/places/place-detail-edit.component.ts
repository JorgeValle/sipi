
import {switchMap} from 'rxjs/operators';


// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Meta, Title }                    from '@angular/platform-browser';

import { Place }        from './place';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'place-detail-edit',
  templateUrl: './place-detail-edit.component.html',
  providers: [PlaceService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class PlaceDetailEditComponent implements OnInit {
	
  place: Place;

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
    
    this.route.paramMap.pipe(
    switchMap((params: ParamMap) => this.placeService.getPlace(+params.get('id'))))
    .subscribe(place => {
      
      this.place = place;

      // SEO stuff
      this.setTitle(`${this.place.content.name} en ${this.place.address.city}| Sipi`);  // set the document title
      this.meta.addTags([
        { name: 'robots', content: 'noindex' },
        { name: 'description', content: `Información sobre el lugar ${this.place.content.name}, ubicado en ${this.place.address.city}` },
        { name: 'tags', content: `Sipi,${this.place.category.subcats},${this.place.address.city},${this.place.address.country}` }
      ]);
    });
  }

  /**
   * functionality to share place
   */
  sharePlace(): void {
    console.log('Share place dialog was opened');
  }

}