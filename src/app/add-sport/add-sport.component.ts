import { Component, OnInit } from '@angular/core';
import { sport } from '../model/sport.model';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { SportService } from '../services/sport.service';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css'] // Correction ici
})
export class AddSportComponent implements OnInit{
  newSport = new sport();
  genres : Genre[] = [];
  newIdGen! : number; 
  newGenre! : Genre; 


  constructor(private sportservice: SportService , private router : Router){
    
  }

  

 
  addSport(){ 
    this.newSport.genre = this.genres.find(cat => cat.idGen == this.newIdGen)!; 
    this.sportservice.ajouterSport(this.newSport) 
                      .subscribe(prod => { 
                      console.log(prod); 
                      this.router.navigate(['sports']); 
                      });  
   }

   ngOnInit(): void { 
    this.sportservice.listeGenre(). 
    subscribe(cats => {console.log(cats); 
                       this.genres = cats._embedded.genres; 
                       } 
  ); 
   } 

//   addSport() {
//     //console.log(this.newSport);
//     this.newGenre = this.sportservice.consulterGenre(this.newIdGen);
//     this.sportservice.ajouterSport(this.newSport);
//     this.router.navigate(['/sports']);
//   }
 

}
