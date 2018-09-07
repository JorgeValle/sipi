

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Title }                    from '@angular/platform-browser';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  //providers: [PlaceService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class HomePageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
	private titleService: Title
  ) {}

  /**
   * Sets the document title
   */
  setTitle(newTitle:string) {
    this.titleService.setTitle(newTitle);	
  }

  ngOnInit(): void {
	
    this.setTitle('Sipi | La Aplicación Urbana de Centroamérica y el Caribe');  // set the document title	
	
  }


}
