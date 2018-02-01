import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeFilter'
})

export class PlaceFilterPipe implements PipeTransform {
  transform(listings: any, args: any) {


    console.log(listings);
    console.log(`args is ${args}`);

    let filterValue = args;
    if (filterValue) {
      return listings.filter(p => p.name.toLowerCase().indexOf(filterValue) != -1);
    } else {
      return listings;
    }
  }
}