import { Component, OnInit } from '@angular/core';
import { sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styles: ``
})
export class RechercheParGenreComponent implements OnInit {



  sports ?: sport[];
  idGenre! : number; 
  genres! : Genre[]; 

  constructor( private sportService: SportService){}
   
  chargerSports(){ 
      this.sportService.listeSport().subscribe(prods => { 
        console.log(prods); 
        this.sports = prods; 
      });  
    } 
  
    supprimerSport(p: sport) 
      { 
        let conf = confirm("Etes-vous sûr ?"); 
        if (conf) 
        this.sportService.supprimerSport(p.idSport).subscribe(() => { 
          console.log("produit supprimé"); 
          this.chargerSports(); 
            }); 
      } 

      onChange() { 
        this.sportService.rechercherParGenre(this.idGenre). 
          subscribe(prods =>{this.sports=prods}); 
        } 
    


      ngOnInit(): void { 
        this.sportService.listeGenre(). 
        subscribe(cats => {this.genres = cats._embedded.genres; 
          console.log(cats); 
      }); 
      } 

}
