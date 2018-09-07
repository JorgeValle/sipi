

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Title }                    from '@angular/platform-browser';

import { Page }        from './page';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up-page.component.html',
  providers: [PageService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class SignUpPageComponent implements OnInit {

  pageSlug = '';

  page: Page;

  // dependencies go in the constructor
  constructor(
    private location: Location,
    private pageService: PageService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}


  /**
   * sets the document title
   */
  setTitle(newTitle:string) {
    this.titleService.setTitle(newTitle);	
  }

  /**
   * OnInit(), lifecycle function which fires when component is ready
   */
  ngOnInit(): void {

    console.log(this.route);  // passes a route object
    console.log(this.route.snapshot.params.slug);

    this.pageSlug = this.route.snapshot.params.slug;  // get the page slug from router

    // this.route.paramMap
    // .switchMap((params: ParamMap) => this.pageService.getPage(params.get('slug')))
    // .subscribe(page => this.page = page);

    this.setTitle(`Registrarse | Sipi`);  // set the document title
    
  }
  
}