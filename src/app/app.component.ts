import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters'
  
@Component({
  selector: 'bigbang-app',
  templateUrl: `./app/app.component.html`,
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
