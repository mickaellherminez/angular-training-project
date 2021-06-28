import { Component } from '@angular/core';
import { Character } from './character';
  
@Component({
  selector: 'bigbang-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
  
  name = 'Angular'; 

  private characters: Character[];
}
