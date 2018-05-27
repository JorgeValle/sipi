import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})

export class PhonePipe implements PipeTransform {

  /**
   * Humanizes dates, like: "34 minutes ago", "32 hours ago", "5 days ago"
   * @param value
   * @param args 
   */
  transform(value: any, args: string[]) {

    let then = Date.parse(value);
    let now = Date.now();

    let difference = now - then;

    let minutesElapsed = difference/60000;
    let hoursElapsed = minutesElapsed/60;
    let daysElapsed = hoursElapsed/24;
    let weeksElapsed = daysElapsed/7;
    let monthsElapsed = weeksElapsed/4;
    let yearsElapsed = monthsElapsed/12;


    if (monthsElapsed > 11) {
      return `Hace ${Math.trunc(yearsElapsed)} año`;
    } else if (monthsElapsed > 1) {
      return `Hace ${Math.trunc(monthsElapsed)} mes`;
    } else if (weeksElapsed > 1) {
      return `Hace ${Math.trunc(weeksElapsed)} semana`;
    } else if (hoursElapsed > 24 ) {
      return `Hace ${Math.trunc(daysElapsed)} días`;
    } else if (hoursElapsed > 1) {
      return `Hace ${Math.trunc(hoursElapsed)} horas`;
    } else if (minutesElapsed > 1) {
      return `Hace ${Math.trunc(minutesElapsed)} minutos`;
    } else {
      return `Hace unos segundos`;
    }

  }
}