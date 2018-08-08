// Angular modules
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html'
})

export class ProgressBarComponent {

  logTheThing(): void {
    console.log("Wont work");
  };

}