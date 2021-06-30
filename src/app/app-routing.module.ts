import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ListCharacterComponent } from './list-character.component';
import { DetailCharacterComponent } from './detail-character.component';
  
// routes
const appRoutes: Routes = [
    { path: 'characters', component: ListCharacterComponent },
    { path: 'character/:id', component: DetailCharacterComponent },
    { path: '', redirectTo: 'characters', pathMatch: 'full' }
];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }