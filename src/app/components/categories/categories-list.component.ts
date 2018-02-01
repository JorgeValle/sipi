// Angular core
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

// Sipi custom
import { Category }        from './category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  providers: [CategoryService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
export class CategoriesListComponent implements OnInit {

  categories: Category[];
  category: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  /**
   * Gets all categories, via service
   */
  getCategories(): void {
    this.categoryService
    .getCategories()
    .subscribe(
      data => {
        this.categories = data
      }
    );
  }

  ngOnInit(): void {
    this.getCategories();
  }

}