// Angular core
import { Component, Input, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap }        from '@angular/router';
import { Location }                        from '@angular/common';

// Sipi custom
import { User }    from './user';
import { AgoPipe } from '../../pipes/ago.pipe';

@Component({
  selector: 'user-detail-profile',
  templateUrl: './user-detail-profile.component.html'
})

export class UserDetailProfileComponent {

  // Inputs
  @Input() user: User;

  /**
   * On Init
   */
  ngOnInit(): void {

  }

}