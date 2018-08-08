// Angular core
import { Component, OnInit, Input }        from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})

export class FooterComponent {

  @Input() user;

}