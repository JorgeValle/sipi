import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlize'
})

export class UrlizePipe implements PipeTransform {

  /**
   * Replaces spaces with plus signs, ready to be put on a URL
   * @param value
   * @param args 
   */
  transform(value: any, args: string[]) {

    if (value) {

      let stringToMod = value;

      return stringToMod.replace(' ', '+');

    }

  }

}