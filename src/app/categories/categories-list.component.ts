// Angular core
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

// Sipi custom
import { Category }           from './category';
import { CategoryService }    from '../../services/category.service';
import { SubcategoryService } from '../../services/subcategory.service';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  providers: [
    CategoryService,
    SubcategoryService
  ]
})

export class CategoriesListComponent implements OnInit {

  categories: Category[];
  category: Category;

  subcategories;

  constructor(
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
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

        this.categories = data;
        
        this.categories.map(x => {
          this.subcategoryService.getSubcategories(x.system.id).subscribe(
            data => {

              let subcategories = data;

            }
          )
        });

      }
    );
  }

  /**
   * 
   */
  ngOnInit(): void {
    this.getCategories();
  }

}