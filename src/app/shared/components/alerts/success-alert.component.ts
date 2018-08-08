// Angular core
import { Component, Input, OnInit }        from '@angular/core';

// Sipi services
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'success-alert',
  templateUrl: './success-alert.component.html'
})

export class SuccessAlertComponent {
  
  @Input() message: string;
  
}