import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { NgForm } from "@angular/forms";
import { CompleterService, CompleterData } from "ng2-completer";
import { RouterModule, Routes } from '@angular/router';




@Component({
  selector: 'search-form-a',
  templateUrl: './search-form-a.component.html',
  //providers: [PlaceService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class SearchFormAComponent {

  runSearch(f: NgForm) {
    console.log('Search was executed with values: ' + f.value);
    console.log('Search form is valid: ' + f.valid);  // false
  }

  protected dataService: CompleterData;

  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];

  protected places = ['Restaurantes', 'Lacalaca', 'DUI Centro', 'Monsieur Chef', 'Pizza Veritas', 'La Marea Azul', 'La Vaca Steakhouse', 'Granados', 'La Gastroteca' ];
 
  protected locations = ['San Salvador, El Salvador', 'Antigua, Guatemala', 'El Progreso, Honduras', 'Havana, Cuba', 'Ciudad de Panama, Panama', 'Petionville, Haiti', 'Managua, Nicaragua', 'Suchitoto, El Salvador' ];

  constructor(private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
  }

}
