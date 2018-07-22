import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amPm'
})

export class AmPmPipe implements PipeTransform {

  /**
   * Transforms military-clock times to am/pm
   * @param value
   * @param args 
   */
  transform(value: any, args: string[]) {

    let thisDate = new Date(`0001-01-01 ${value}`);

    let hour = thisDate.getHours(),
        minutes = ('0' + thisDate.getMinutes()).slice(-2);

    console.log(hour);
    console.log(minutes);

    if (hour >= 12) {

      return `${(hour - 12)}:${minutes} p.m`;

    } else {

      return `${hour}:${minutes} a.m`;

    }

  }
}