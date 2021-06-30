import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';
import { Router } from '@angular/router';
  
@Component({
    selector: 'list-character',
    templateUrl: './app/list-character.component.html'
})
export class ListCharacterComponent implements OnInit {
  
    characters: Character[] = null;
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
        this.characters = CHARACTERS;
    }
  
    selectCharacter(character: Character): void {
        console.log('Vous avez selectionné ' + character.name);
        let link = ['/character', character.id];
        this.router.navigate(link);
    }
  
}