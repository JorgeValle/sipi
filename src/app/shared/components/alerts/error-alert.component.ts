// Angular core
import { Component, Input, OnInit }        from '@angular/core';

// Sipi custom
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'error-alert',
  templateUrl: './error-alert.component.html'
})

export class ErrorAlertComponent {

  @Input() message: string;

}