// Angular core
import { Component, Input, OnInit } from '@angular/core';

// Sipi custom
import { User }           from './user';
import { UserService }    from '../../services/user.service';

@Component({
  selector: 'latest-users',
  templateUrl: './latest-users.component.html',
  providers: [
    UserService
  ]
})

// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class LatestUsersComponent implements OnInit {

  @Input() user: User;

  /**
   * On Init
   */
  ngOnInit(): void {
    
  }


}