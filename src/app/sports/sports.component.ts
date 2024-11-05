import { Component, OnInit } from '@angular/core';
import { sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent implements OnInit{
  apiurl:string='http://localhost:8081/sports/api';

  sports ?: sport[];
  imageStr!:string;
  
  constructor( private sportService: SportService, public authService: AuthService){}
   
  // chargerSports(){ 
  //     this.sportService.listeSport().subscribe(prods => { 
  //       console.log(prods); 
  //       this.sports = prods; 
  //     this.sports.forEach((prod) => {
  //         prod.imageStr = 'data:' + prod.images[0].type + ';base64,' +  prod.images[0].image;
  //         });
  //       });
  //   } 

  chargerSports(){
    this.sportService.listeSport().subscribe(prods => {
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
