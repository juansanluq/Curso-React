import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    if (todas) {
      return value.toUpperCase();
    } else {
      value = value.toLowerCase();
      let words = value.split(' ');

      words = words.map((word: string) => {
        return word[0].toUpperCase() + word.substr(1);
      });
      return words.join(' ');
    }
  }
}
