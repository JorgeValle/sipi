// Angular core
import { Component, OnInit, Input }        from '@angular/core';

@Component({
  selector: 'masthead',
  templateUrl: './masthead.component.html'
})

export class MastheadComponent {

  @Input() user;

}