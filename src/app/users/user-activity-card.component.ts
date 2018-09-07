// Angular core
import { Component, Input, OnInit } from '@angular/core';

// Sipi custom
import { User } from './user';

@Component({
  selector: 'user-activity-card',
  templateUrl: './user-activity-card.component.html'
})

// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class UserActivityCardComponent implements OnInit {

  @Input() user: User;

  /**
   * On Init
   */
  ngOnInit(): void {
    
  }


}