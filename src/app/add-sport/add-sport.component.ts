import { Component, OnInit } from '@angular/core';
import { sport } from '../model/sport.model';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { SportService } from '../services/sport.service';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';
import { Image } from '../model/Image.model';


@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css'] // Correction ici
})
export class AddSportComponent implements OnInit {
  newSport = new sport();
  genres: Genre[] = [];
  newIdGen!: number;
  newGenre!: Genre;

  uploadedImage!: File;
  imagePath: any;




  constructor(private sportservice: SportService, private router: Router) {

  }




  /*addSport(){ 
    this.newSport.genre = this.genres.find(cat => cat.idGen == this.newIdGen)!; 
    this.sportservice.ajouterSport(this.newSport) 
                      .subscribe(prod => { 
                      console.log(prod); 
                      this.router.navigate(['sports']); 
                      });  
   }*/

  addSport() {
    this.newSport.genre = this.genres.find(cat => cat.idGen
      == this.newIdGen)!;
      this.sportservice
      .ajouterSport(this.newSport)
      .subscribe((prod) => {
      this.sportservice
      .uploadImageFS(this.uploadedImage,
      this.uploadedImage.name,prod.idSport)
      .subscribe((response: any) => {}
      );
      this.router.navigate(['sports']);
      })
  }


  ngOnInit(): void {
    this.sportservice.listeGenre().
      subscribe(cats => {
        console.log(cats);
        this.genres = cats._embedded.genres;
      }
      );
  }

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
  }

  //   addSport() {
  //     //console.log(this.newSport);
  //     this.newGenre = this.sportservice.consulterGenre(this.newIdGen);
  //     this.sportservice.ajouterSport(this.newSport);
  //     this.router.navigate(['/sports']);
  //   }


}
