import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ago'
})

export class AgoPipe implements PipeTransform {

  /**
   * Humanizes dates, like: "34 minutes ago", "32 hours ago", "5 days ago"
   * @param value
   * @param args 
   */
  transform(value: any, args: string[]) {

    const then = Date.parse(value),
          now = Date.now();

    let difference = now - then;

    const minutesElapsed = difference/60000,
          hoursElapsed = minutesElapsed/60,
          daysElapsed = hoursElapsed/24,
          weeksElapsed = daysElapsed/7,
          monthsElapsed = weeksElapsed/4,
          yearsElapsed = monthsElapsed/12;


    if (monthsElapsed > 11) {

      // for months
      if (monthsElapsed <= 24) {
        return `${Math.trunc(yearsElapsed)} año`;
      } else {
        return `${Math.trunc(yearsElapsed)} años`;
      }

    } else if (monthsElapsed > 1) {

      // for months
      if (monthsElapsed < 2) {
        return `${Math.trunc(monthsElapsed)} mes`;
      } else {
        return `${Math.trunc(monthsElapsed)} meses`;
      }

    } else if (weeksElapsed > 1) {

      // for weeks
      if (weeksElapsed < 2) {
        return `${Math.trunc(weeksElapsed)} semana`;
      } else {
        return `${Math.trunc(weeksElapsed)} semanas`;
      }

    } else if (hoursElapsed > 24 ) {

      // for days
      if (hoursElapsed <= 48) {
        return `${Math.trunc(daysElapsed)} día`;
      } else {
        return `${Math.trunc(daysElapsed)} días`;
      }

    } else if (hoursElapsed > 1) {

      // for hours
      if (hoursElapsed < 2) {
        return `${Math.trunc(hoursElapsed)} hora`;
      } else {
        return `${Math.trunc(hoursElapsed)} horas`;
      }
      
    } else if (minutesElapsed > 1) {

      // for minutes
      if (minutesElapsed < 2) {
        return `${Math.trunc(minutesElapsed)} minutos`;
      } else {
        return `${Math.trunc(minutesElapsed)} minuto`;
      }
      
    } else {

      // for secs
      return `unos segundos`;
    }

  }
}