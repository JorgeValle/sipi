import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ampm'
})

export class AmPmPipe implements PipeTransform {

  /**
   * Transforms military-clock times to am/pm
   * @param value
   * @param args 
   */
  transform(value: any, args: string[]) {

    let valueInt = parseInt(value);

    if (valueInt >= 12) {

      return `${value} p.m`;

    } else {

      return `${value} a.m`;

    }

  }
}