// Angular core
import { Component, Input, OnInit } from '@angular/core';

// Sipi custom
import { User } from '../users/user';

@Component({
  selector: 'main-menu-auth',
  templateUrl: './main-menu-auth.component.html'
})

export class MainMenuAuthComponent {

  // inputs
  @Input() user: User;

}