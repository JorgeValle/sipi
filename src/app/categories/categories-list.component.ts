import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
	// this selector is the html tag
	selector: 'categories-list',
	// which template to render
	templateUrl: './categories-list.component.html',
	styleUrls: [ './categories-list.component.css' ],
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
	
	getCategories(): void {
		this.categoryService
		.getCategories()
		.then(categories => this.categories = categories);
	}
	
	ngOnInit(): void {
		this.getCategories();
	}
	
}