import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: Country[], keys: string, term: string) {
    if (!term) return value;
    term = term.toLowerCase();
    return value.filter(
      (item) =>
        item.country.toLowerCase().includes(term) ||
        item.continent.toLowerCase().includes(term)
    );
  }
}
