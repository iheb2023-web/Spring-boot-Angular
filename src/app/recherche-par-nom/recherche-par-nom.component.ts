import { Component, OnInit } from '@angular/core';
import { sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit{

  sports !: sport[];
  nomSport!: string;

  allSports! : sport[]; 
  searchTerm!: string; 

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


      // ngOnInit(): void { 
      //   this.sportService.listeSport().subscribe(prods => {
      //     console.log(prods);
      //     this.sports = prods;
      //     }); 
      // } 

      ngOnInit(): void { 
        this.sportService.listeSport().subscribe(prods => { 
          console.log(prods); 
          this.sports = prods; 
          }); 
      } 
     
      onKeyUp(filterText: string) { 
        this.sports = this.allSports.filter(item => 
          item.nomSport && item.nomSport.toLowerCase().includes(filterText.toLowerCase())
        ); 
      }

      rechercherSport(){ 
        this.sportService.rechercherParNom(this.nomSport). 
        subscribe(prods => { 
        this.sports = prods;        
        console.log(prods)}); 
        } 

}
