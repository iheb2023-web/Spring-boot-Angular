import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styles: ``
})
export class UpdateGenreComponent {

  @Input()
  genre!: Genre;

  @Input() 
  ajout!:boolean;

  @Output()  
  genreUpdate = new EventEmitter<Genre>();

  saveGenre(){ 
    this.genreUpdate.emit(this.genre); 
    }

  ngOnInit(): void { 
    console.log("ngOnInit du composant UpdateCategorie ",this.genre); 
    } 

}
