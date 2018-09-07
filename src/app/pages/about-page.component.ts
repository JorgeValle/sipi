

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Title }                    from '@angular/platform-browser';

@Component({
	selector: 'about-page',
	templateUrl: './about-page.component.html',
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class AboutPageComponent {

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
    this.setTitle('Sobre Sipi | Sipi');  // set the document title
  }

}