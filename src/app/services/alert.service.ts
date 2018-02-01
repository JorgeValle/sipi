// Angular core
import { Injectable } from '@angular/core';

@Injectable()
// Application logic is added here, in the service
export class AlertService {

  constructor() {}

  cars = [
    'Ford', 'Buick', 'Fiat'
  ];

  myData() {
    return 'This is my data, man';
  }

  /**
   * Builds the alert message to display
   * @param message - The message to display
   * @returns 
   */
  buildAlert(message:string) {
    return message;
  }

}
