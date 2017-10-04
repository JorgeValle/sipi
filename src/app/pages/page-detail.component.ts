import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Title }                    from '@angular/platform-browser';

import { Page }        from './page';
import { PageService } from './page.service';

@Component({
	selector: 'page-detail',
	templateUrl: './page-detail.component.html',
	providers: [PageService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class PageDetailComponent implements OnInit {
	
  page: Page;

  // constructors for services
  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title
  ) {}


  /**
   * sets the document title
   */
  setTitle(newTitle:string) {
    this.titleService.setTitle(newTitle);	
  }
	
  /**
   * OnInit()
   */
  ngOnInit(): void {
		
    this.setTitle('Una pagina | Sipi');  // set the document title
	
    this.route.paramMap
    .switchMap((params: ParamMap) => this.pageService.getPage(params.get('id')))
    .subscribe(page => this.page = page);
		
  }
  
}