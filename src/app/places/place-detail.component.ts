// Angular core
import { Component, OnInit, OnDestroy }              from '@angular/core';
import { ActivatedRoute, ParamMap }       from '@angular/router';
import { Location }                       from '@angular/common';
import { Meta, Title }                    from '@angular/platform-browser';

// Sipi custom
import { Place }        from './place';
import { PlaceService } from '../../services/place.service';
import { SeoService }   from '../../services/seo.service';

// Third party
import { Observable } from 'rxjs';

@Component({
  selector: 'place-detail',
  templateUrl: './place-detail.component.html',
  providers: [
    PlaceService,
    SeoService
  ]
})

export class PlaceDetailComponent implements OnInit, OnDestroy {

  place$: Observable<any>;

  place: Place;
  placeId;
  test;

  branches: Place[];

  // used for tracking data loading state
  loading: boolean;

  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    private meta: Meta,
    private seoService: SeoService
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
    

    this.placeId = this.route.snapshot.paramMap.get('id');

    this.place$ = this.placeService.getPlace(this.placeId);

    this.placeService.getPlace(this.placeId)
    .subscribe(data => {

      console.log(data);
      this.place = data;
     
      /**
       * Builds up the page title string
       * @param place 
       */
      let pageTitle = (place) => {

        if (place.organizational.isBranch) {
          return `${place.organizational.parent.name} ${place.content.name}`;
        } else {
          return `${place.content.name}`;
        }

      }

      this.setTitle(`${pageTitle(this.place)} | Sipi`);  // set the document title
      this.meta.addTags([
        // { name: 'robots', content: 'noindex' },
        { name: 'description', content: `Información sobre el lugar ${this.place.content.name}, ubicado en ${this.place.address.city}, ${this.place.address.country}` },
        // { name: 'tags', content: `Sipi,${this.place$},${this.place$},${this.place$}` }
      ]);
      this.seoService.createLinkForCanonicalURL();

      // get children
      this.placeService.getBranches(this.placeId)
      .subscribe(data => {

        this.branches = data;

      });



    });
  }

  /**
   * On Destroy
   */
  ngOnDestroy(): void {
    
    console.log('Place detail component was destroyed');
  }

  /**
   * Shares place
   */
  sharePlace(): void {
    console.log('Share place dialog was opened');
  }

}