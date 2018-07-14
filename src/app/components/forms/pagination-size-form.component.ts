// Angular core
import { Component, EventEmitter, OnInit, Output }        from '@angular/core';
import { ActivatedRoute, ParamMap }                       from '@angular/router';
import { Location, NgClass }                              from '@angular/common';

@Component({
  selector: 'pagination-size-form',
  templateUrl: './pagination-size-form.component.html'
})

export class PaginationSizeFormComponent implements OnInit {

  paginationPredicate: number;

  @Output() paginationNumberChanged = new EventEmitter<string>();

  /**
   * On Init
   * @todo Figure out why sortPredicate is not initalizing to 'rating'
   */
  ngOnInit(): void {

    this.paginationPredicate = 10;
    console.log('Sort places form is ready');
  }

  /**
   */
  updatePaginationSize(paginationPredicate): void {

    this.paginationNumberChanged.emit(paginationPredicate);
    
  }

}