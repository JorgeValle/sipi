// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Title }                    from '@angular/platform-browser';

// Third party
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'advertising-page',
  templateUrl: './advertising-page.component.html',
})

// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class AdvertisingPageComponent {

  // dependencies go in the constructor
  constructor(
    private titleService: Title
  ) {}
  
  /**
   * Sets the document title
   */
  setTitle(newTitle:string) {
    this.titleService.setTitle(newTitle);	
  }

  /**
   * OnInit(), lifecycle function which fires when component is ready
   */
  ngOnInit(): void {
    this.setTitle('Publicidad | Sipi');  // set the document title
  }

}