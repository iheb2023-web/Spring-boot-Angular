import { Component, OnInit } from '@angular/core';
import { sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent implements OnInit{
  sports ?: sport[];

  constructor( private sportService: SportService, public authService: AuthService){}
   
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


      ngOnInit(): void { 
        this.chargerSports(); 
      } 
     

  



  //    this.sports = sportService.listSport();}

  //    supprimerSport(p: any) {
  //     let conf = confirm("Etes-vous sûr ?");
  //     if (conf) {
  //       this.sportService.supprimerSport(p); 
  //     }
  //   }

  //   this.sports = [
  //     {idSport: 1, nomSport: 'Football',descriptionSport:"collectif",dateFondation: new Date('2004-07-22')},
  //     {idSport: 2, nomSport: 'Basketball',descriptionSport:"collectif",dateFondation: new Date('2001-09-25')},
  //     {idSport: 3, nomSport: 'Tennis',descriptionSport:"collectif",dateFondation: new Date('1999-11-18')},
  // ]

}
