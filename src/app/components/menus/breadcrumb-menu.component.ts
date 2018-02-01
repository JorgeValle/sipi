// importing, through native JS, from Angular core or libraries
import { Component, OnInit, Input }        from '@angular/core';

@Component({
  selector: 'breadcrumb-menu',
  templateUrl: './breadcrumb-menu.component.html'
})

// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class BreadcrumbMenuComponent {

  @Input() country: string;
  @Input() city: string;
  @Input() subcategories: string[];  // declaring string array

}