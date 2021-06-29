import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters'
  
@Component({
  selector: 'bigbang-app',
  template: `<h1>Characters</h1>`,
})
export class AppComponent implements OnInit { 
  
  characters: Character[] = null;

  ngOnInit() {
    this.characters = CHARACTERS;
  }

  selectCharacter(character: Character) {
    console.log('Vous avez selectionné ' + character.name);
  }
}
