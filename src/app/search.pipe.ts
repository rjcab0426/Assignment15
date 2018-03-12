import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (value.length !== 0) {
      //search student by lastname
      return value.filter((item) => item.lastName.startsWith(args));
    } else {
      return [];
    }
  };

}
