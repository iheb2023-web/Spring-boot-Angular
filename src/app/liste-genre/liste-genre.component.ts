import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { SportService } from '../services/sport.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-genre',
  templateUrl: './liste-genre.component.html',
  styles: []
})
export class ListeGenreComponent  implements OnInit{

  genres!: Genre[];
  updatedGen:Genre = {"idGen":0,"nomGen":""}; 
  ajout:boolean=true;


  constructor(private sportService : SportService, public authService: AuthService) { } 

  ngOnInit(): void {
    this.chargerGenres();
  }

  chargerGenres(){ 
    this.sportService.listeGenre(). 
    subscribe(cats => {this.genres = cats._embedded.genres; 
    console.log(cats); 
    }); 
    } 

    genreUpdated(cat: Genre){ 
      this.sportService.ajouterGenre(cat).subscribe( ()=> this.chargerGenres());

    }

    updateGen(cat:Genre) {
      this.updatedGen=cat;
      this.ajout=false;  
    }

    
    
    
    supprimerGenre(cat : Genre) {
      let conf = confirm("Etes-vous sûr ?");
         if (conf)
         {
           this.sportService.supprimerGenre(cat.idGen).subscribe(() => {
            console.log("Catégorie supprimée");
            this.chargerGenres(); }  );
         }
    }

}
