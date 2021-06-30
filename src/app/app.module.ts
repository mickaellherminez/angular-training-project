import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ListCharacterComponent } from './list-character.component';
import { DetailCharacterComponent } from './detail-character.component';
import { CharacterTypeColorPipe } from './character-type-color.pipe';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, ListCharacterComponent, DetailCharacterComponent, CharacterTypeColorPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }