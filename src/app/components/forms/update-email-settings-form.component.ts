// Angular core
import { Component, Input, OnInit }      from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// Sipi custom
import { User } from '../users/user';

@Component({
  selector: 'update-email-settings-form',
  templateUrl: './update-email-settings-form.component.html'
})

export class UpdateEmailSettingsFormComponent implements OnInit {

  // inputs
  @Input() user: User;

  settings;

  /**
   * Updates the current user's email settings
   */
  onSubmit(): void {

    console.log('Email settings were updated');

  }

  /**
   * On Init
   */
  ngOnInit(): void {

    this.settings = new FormGroup({
      weekly: new FormControl(''),
      never: new FormControl('')
    });
  }

  updateEmailSettings(settings) {
    
  }

}