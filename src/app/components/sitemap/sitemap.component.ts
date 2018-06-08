// Angular core
import { Component, Input, OnInit }  from '@angular/core';
import { ActivatedRoute, ParamMap }  from '@angular/router';
import { Location }                  from '@angular/common';

@Component({
  selector: 'sitemap',
  templateUrl: './sitemap.component.html',
})

export class SitemapComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    window.location.href = 'https://sipi-rest-api.herokuapp.com/retrieve/sitemap.xml';
  }

}