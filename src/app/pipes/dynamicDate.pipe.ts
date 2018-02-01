import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dynamicDate'
})

export class DynamicDatePipe implements PipeTransform {

  /**
   * Humanizes dates, like: "34 minutes ago", "32 hours ago", "5 days ago"
   * @param value
   * @param args 
   */
  transform(value: any, args: string[]) {
    let filterValue = args;
    if (filterValue) {
      return value.filter(p => p.name.toLowerCase().indexOf(filterValue) != -1);
    } else {
      return value;
    }
  }
}