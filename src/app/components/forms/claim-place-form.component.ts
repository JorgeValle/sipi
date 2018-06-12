// Angular core
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

// Sipi custom
import { Subcategory }        from '../categories/subcategory';
import { SubcategoryService } from '../../services/subcategory.service';

// Third party


@Component({
  selector: 'claim-place-form',
  templateUrl: './claim-place-form.component.html',
  providers: [
    SubcategoryService
  ]
})

export class ClaimPlaceFormComponent implements OnInit {

  subcategories: Subcategory[];
  subcategory: Subcategory;

  constructor(
    private subcategoryService: SubcategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  /**
   * Get subcategories
   */
  getSubcategories(): void {
    this.subcategoryService
    .getSubcategories()
    .subscribe(
      data => {
        this.subcategories = data
      }
    );
  }

  /**
   * Updates place
   */
  updatePlace() {
    console.log("API request to save this place");
  }

  /**
   * On Init
   */
  ngOnInit(): void {
    this.getSubcategories();
  }



}
