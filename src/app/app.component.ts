import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Character } from './character';
import { CHARACTERS } from './mock-characters'
  
@Component({
  selector: 'bigbang-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit { 
  
  name = 'Angular'; 

  private characters: Character[];

  ngOnInit() {
    this.characters = CHARACTERS;
  }
}
