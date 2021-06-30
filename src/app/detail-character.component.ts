import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';
  
@Component({
    selector: 'detail-character',
    templateUrl: './app/detail-character.component.html'
})
export class DetailCharacterComponent implements OnInit {
  
    characters: Character[] = null;
    character: Character = null;
  
    constructor(private route: ActivatedRoute, private router: Router) {}
  
    ngOnInit(): void {
        this.characters = CHARACTERS;
        
        console.log('this.route: ', this.route)
        let id = +this.route.snapshot.paramMap.get('id');
        for (let i = 0; i < this.characters.length; i++) {
            if (this.characters[i].id == id) {
                this.character = this.characters[i];
            }
        }
    }
  
    goBack(): void {
        this.router.navigate(['/characters']);
    }
  
}