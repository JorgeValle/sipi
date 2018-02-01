// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';

// Sipi custom
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'info-alert',
  templateUrl: './info-alert.component.html'
})

// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class InfoAlertComponent {

}