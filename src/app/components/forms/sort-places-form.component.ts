// Angular core
import { Component, EventEmitter, OnInit, Output }        from '@angular/core';
import { ActivatedRoute, ParamMap }                       from '@angular/router';
import { Location, NgClass }                              from '@angular/common';

@Component({
  selector: 'sort-places-form',
  templateUrl: './sort-places-form.component.html'
})

export class SortPlacesFormComponent implements OnInit {

  sortPredicate: string;

  @Output() predicateChanged = new EventEmitter<string>();

  /**
   * On Init
   * @todo Figure out why sortPredicate is not initalizing to 'rating'
   */
  ngOnInit(): void {

    this.sortPredicate = 'content.name';
    this.predicateChanged.emit(this.sortPredicate);
  }

  /**
   * Updates the sort order, by emitting the new predicate via output
   * @param {string} sortPredicate - the predicate by which a list is sorted
   */
  updateSortOrder(sortPredicate): void {

    this.predicateChanged.emit(sortPredicate);
    
  }

}