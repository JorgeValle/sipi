
import {switchMap} from 'rxjs/operators';

// Angular core
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Meta, Title }              from '@angular/platform-browser';

// Sipi custom
import { Page }        from './page';
import { PageService } from '../../services/page.service';
import { SeoService }  from '../../services/seo.service';

// Third party


@Component({
  selector: 'page-detail',
  templateUrl: './page-detail.component.html',
  providers: [
    PageService
  ]
})

export class PageDetailComponent implements OnInit {

  pageSlug = '';

  page: Page;

  // dependencies go in the constructor
  constructor(
    private location: Location,
    private pageService: PageService,
    private route: ActivatedRoute,
    private meta: Meta,
    private titleService: Title,
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

    console.log(this.route);  // passes a route object
    console.log(this.route.snapshot.params.slug);

    this.pageSlug = this.route.snapshot.params.slug;  // get the page slug from router

    this.route.paramMap.pipe(
    switchMap((params: ParamMap) => this.pageService.getPage(params.get('slug'))))
    .subscribe(page => {

      this.page = page;

      this.setTitle(`${this.page.content.title} | Sipi`);  // set the document title
      this.meta.addTags([
        { name: 'description', content: `Lea esta página para obtener mayor información sobre Sipi.` },
        // { name: 'tags', content: `Sipi,${this.place$},${this.place$},${this.place$}` }
      ]);
      this.seoService.createLinkForCanonicalURL();
    
    
    });
    
  }
  
}