// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit {
	
  constructor() { }

  ngOnInit() {
  }

}