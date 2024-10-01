import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportService } from '../services/sport.service';
import { sport } from '../model/sport.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-sport',
  templateUrl: './update-sport.component.html',
  styles: []
})
export class UpdateSportComponent implements OnInit{
  currentSport = new sport();
  genres : Genre[] = [];
  updateGenId! : number;

  constructor(private activatedRoute: ActivatedRoute, private sportService: SportService, private router: Router){}

  
    updateSport() { 
      this.currentSport.genre = this.genres. 
      find(cat => cat.idGen == this.updateGenId)!; 
      this.sportService.updateSport(this.currentSport).subscribe(prod => { 
      this.router.navigate(['sports']); } 
);  
      }

      ngOnInit(): void { 
        this.sportService.listeGenre(). 
        subscribe(cats => {console.log(cats); 
                          this.genres = cats._embedded.genres; 
          } ); 
        this.sportService.consulterSport(this.activatedRoute.snapshot.params['id']). 
        subscribe( prod =>{ this.currentSport = prod;  
                            this.updateGenId = 
                            this.currentSport.genre.idGen; 
        } ) ; 
        } 

  // updateSport(){
  //   this.currentSport.genre=this.sportService.consulterGenre(this.updateGenId);
  //   this.sportService.updateSport(this.currentSport);
  //   this.router.navigate(['/sports']);
  // }

  // ngOnInit(): void {
  //   this.genres = this.sportService.listeGenre();
    
  //   this.currentSport = this.sportService.consulterSport(this.activatedRoute.snapshot.params['id']);
  //   this.updateGenId = this.currentSport.genre.idGen;
  //   //console.log(this.currentSport);
  // }

}
