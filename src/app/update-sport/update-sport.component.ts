import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportService } from '../services/sport.service';
import { sport } from '../model/sport.model';
import { Genre } from '../model/genre.model';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-update-sport',
  templateUrl: './update-sport.component.html',
  styles: []
})
export class UpdateSportComponent implements OnInit {
  currentSport = new sport();
  genres: Genre[] = [];
  updateGenId!: number;
  myImage!: string;
  uploadedImage!: File;
  isImageUpdated: Boolean = false;



  constructor(private activatedRoute: ActivatedRoute, private sportService: SportService, private router: Router) { }


  /*updateSport() {
    this.currentSport.genre = this.genres.find(cat => cat.idGen == this.updateGenId)!;
    //tester si l'image du produit a été modifiée
    if (this.isImageUpdated) {
      this.sportService
        .uploadImage(this.uploadedImage, this.uploadedImage.name)
        .subscribe((img: Image) => {
          this.currentSport.image = img;
          this.sportService
            .updateSport(this.currentSport)
            .subscribe((prod) => {
              this.router.navigate(['sports']);
            });
        });
    }
    else {
      this.sportService
        .updateSport(this.currentSport)
        .subscribe((prod) => {
          this.router.navigate(['sports']);
        });
    }
  }*/

  updateSport(){
    this.currentSport.genre = this.genres.find(cat => cat.idGen ==
      this.updateGenId)!;
      this.sportService
      .updateSport(this.currentSport)
      .subscribe((prod) => {
      this.router.navigate(['sports']);
      });
  }




  /*ngOnInit(): void {
    this.sportService.listeGenre().
      subscribe(cats => {
        console.log(cats);
        this.genres = cats._embedded.genres;
      });


    this.sportService.consulterSport(this.activatedRoute.snapshot.params['id']).
      subscribe(prod => {
        this.currentSport = prod;
        this.updateGenId =
          this.currentSport.genre.idGen;


        // this.sportService
        // .loadImage(this.currentSport.image.idImage)
        // .subscribe((img: Image) => {
        // this.myImage = 'data:' + img.type + ';base64,' + img.image;
        // }); 
        if (this.currentSport.image && this.currentSport.image.idImage) {
          this.sportService
            .loadImage(this.currentSport.image.idImage)
            .subscribe((img: Image) => {
              this.myImage = 'data:' + img.type + ';base64,' + img.image;
            });
        }
      });

  }*/
  ngOnInit(): void {
    this.sportService.listeGenre().
      subscribe(cats => {
        this.genres = cats._embedded.genres;
      });
    this.sportService.consulterSport(this.activatedRoute.snapshot.params['id'])
      .subscribe(prod => {
        this.currentSport = prod;
        this.updateGenId = prod.genre.idGen;
      });
  }

  supprimerImage(img: Image) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.sportService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentProduit.images
        const index = this.currentSport.images.indexOf(img, 0);
        if (index > -1) {
          this.currentSport.images.splice(index, 1);
        }
      });
  }

  onAddImageProduit() {
    this.sportService
      .uploadImageProd(this.uploadedImage,
        this.uploadedImage.name, this.currentSport.idSport)
      .subscribe((img: Image) => {
        this.currentSport.images.push(img);
      });
  }

  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
    }
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