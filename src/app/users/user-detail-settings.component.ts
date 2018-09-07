// Angular core
import { Component, Input, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Title }                    from '@angular/platform-browser';

// Sipi custom
import { User } from './user';

@Component({
  selector: 'user-detail-settings',
  templateUrl: './user-detail-settings.component.html'
})

export class UserDetailSettingsComponent {


  // inputs
  @Input() user: User;

  /**
   * Updates email preferences
   */
  updateEmailPreferences(): void {

  }

  /**
   * Requests profile deletion
   */
  requestProfileDeletion(): void {
    
  }


}