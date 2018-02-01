// Angular core
import { Component, EventEmitter, OnInit, Output }        from '@angular/core';
import { ActivatedRoute, ParamMap }                       from '@angular/router';
import { Location, NgClass }                              from '@angular/common';

// Sipi custom
import { CategoryFilter }         from '../categories/category-filter';
import { CategoryFilterService }  from '../../services/category-filter.service';
import { Distance }               from '../distances/distance';
import { DistanceService }        from '../../services/distance.service';
import { Subcategory }            from '../categories/subcategory';
import { SubcategoryService }     from '../../services/subcategory.service';

@Component({
  selector: 'filter-places-form',
  templateUrl: './filter-places-form.component.html',
  providers: [
    CategoryFilterService,
    DistanceService,
    SubcategoryService
  ]
})

export class FilterPlacesFormComponent implements OnInit{

  // Outputs
  @Output() priceChanged = new EventEmitter;
  @Output() filterSubcategories = new EventEmitter<string>();
  @Output() pricePredicateChanged = new EventEmitter<string>();

  categoryFilters: CategoryFilter[];
  subcategories: Subcategory[];
  subcategory: Subcategory;
  distances: Distance[];

  constructor(
    private categoryFilterService: CategoryFilterService,
    private distanceService: DistanceService,
    private subcategoryService: SubcategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  /**
   * Gets subcategories
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
   * Gets distances
   */
  getDistances(): void {
    this.distanceService
    .getDistances()
    .subscribe(
      data => {
        this.distances = data
      }
    );
  }

  /**
   * Applies the filter chain
   * @param event 
   */
  applyFilterChain(event): void {
    console.log("Filter chain has been applied");

    let srcElement = event.srcElement;
    srcElement.class = 'btn-primary';

    console.log(srcElement);
  }


  /**
   * On Init
   */
  ngOnInit(): void {
    this.getSubcategories();
    this.getDistances();
    this.populateFilterOptions(1);
  }

  /**
   * Filters by subcategories
   */
  filterBySubcategories(): void {

  }

  /**
   * Filters place list by price
   * @param price 
   */
  filterByPrice(price): void {

    console.log(`Filter by price of ${price}`);

    this.priceChanged.emit(price);

  }

  /**
   * Populates the filtering options, depending on search criteria
   * @param {number} categoryId
   */
  populateFilterOptions(categoryId): void {
    this.categoryFilterService
    .getCategoryFilters()
    .then(categoryFilters => this.categoryFilters = categoryFilters);
  }

}