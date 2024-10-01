import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-liste-genre',
  templateUrl: './liste-genre.component.html',
  styles: []
})
export class ListeGenreComponent  implements OnInit{

  genres!: Genre[];
  updateGen:Genre = {"idGen":0,"nomGen":""}; 
  ajout:boolean=true;


  constructor(private sportService : SportService) { } 

  ngOnInit(): void {
    this.chargerGenres();
  }

  chargerGenres(){ 
    this.sportService.listeGenre(). 
    subscribe(cats => {this.genres = cats._embedded.genres; 
    console.log(cats); 
    }); 
    } 

    updateGenr(cat:Genre) {
      this.updateGen=cat;
      this.ajout=false;  
    }

    genreUpdated(event: any){ 
      if (event && event instanceof Genre) {
        console.log("Genre updated event", event); 
        this.sportService.ajouterGenre(event).subscribe(() => this.chargerGenres());
      } else {
        console.error("Invalid event type", event);
      }
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
