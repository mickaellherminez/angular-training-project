import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({name: 'characterTypeColor'})
export class CharacterTypeColorPipe implements PipeTransform {
  transform(name: string): string {
  
    let color: string;
    
    color = (['Penny Hofstadter', 'Bernadette Maryann Rostenkowski', 'Amy Farrah Fowler'].indexOf(name) === -1 )? 'blue lighten-3' : 'pink lighten-3';
    return 'chip ' + color;
  }
}