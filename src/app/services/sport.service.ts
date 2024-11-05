import { Injectable } from '@angular/core';
import { sport } from '../model/sport.model';
import { Genre } from '../model/genre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenreWrapped } from '../model/GenreWrapped.model';
import { AuthService } from './auth.service';
import { Image } from '../model/Image.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SportService {

  apiURL: string = 'http://localhost:8081/sports/api';
  apiURLGen: string = 'http://localhost:8081/sports/gen';

  constructor(private http: HttpClient, private authService: AuthService) {

  }
  listeSport(): Observable<sport[]> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<sport[]>(this.apiURL + "/all");
  }


  ajouterSport(sp: sport): Observable<sport> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.post<sport>(this.apiURL + "/addsport", sp, { headers: httpHeaders })
  }


  supprimerSport(id: number) {
    const url = `${this.apiURL}/delsport/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.delete(url, { headers: httpHeaders });
  }

  consulterSport(id: null): Observable<sport> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<sport>(url, { headers: httpHeaders });
  }

  updateSport(sp: sport): Observable<sport> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.put<sport>(this.apiURL + "/updatesport", sp, { headers: httpHeaders });
  }


  listeGenre(): Observable<GenreWrapped> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<GenreWrapped>(this.apiURLGen, { headers: httpHeaders }
    );
  }

  ajouterGenre(cat: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.apiURLGen, cat, httpOptions);
  }

  supprimerGenre(id: number) {
    const url = `${this.apiURLGen}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  rechercherParGenre(idGen: number): Observable<sport[]> {
    const url = `${this.apiURL}/sportsgen/${idGen}`;
    return this.http.get<sport[]>(url);
  }

  rechercherParNom(nom: string): Observable<sport[]> {
    const url = `${this.apiURL}/sportByName/${nom}`;
    return this.http.get<sport[]>(url);
  }


  uploadImage(file: File, filename: string): Observable<Image> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/upload'}`;
    return this.http.post<Image>(url, imageFormData);
  }
  loadImage(id: number): Observable<Image> {
    const url = `${this.apiURL + '/image/get/info'}/${id}`;
    return this.http.get<Image>(url);
  }

  uploadImageProd(file: File, filename: string, idProd: number): Observable<any> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/uplaodImageProd'}/${idProd}`;
    return this.http.post(url, imageFormData);
  }

  supprimerImage(id : number) {
    const url = `${this.apiURL}/image/delete/${id}`;
    return this.http.delete(url, httpOptions);
    }

    uploadImageFS(file: File, filename: string, idProd : number): Observable<any>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${this.apiURL + '/image/uploadFS'}/${idProd}`;
      return this.http.post(url, imageFormData);
      }
    



  // sports : sport[]
  // spo! : sport;
  // genres : Genre[];

  // constructor() {
  //   this.genres=[ 
  //     {idGen : 1,nomGen: "collectif"},
  //     {idGen : 2, nomGen : "individ"}
  //   ];
  //   this.sports = [
  //     {idSport: 1, nomSport: 'Football', descriptionSport: 'The beautiful game', dateFondation: new Date("01/14/2011"), genre :{idGen:1,nomGen:"collectif"}},
  //     {idSport: 2, nomSport: 'Basket', descriptionSport: 'The fast',dateFondation: new Date("11/02/2000"), genre :{idGen:1,nomGen:"collectif"}},
  //     {idSport: 3, nomSport: 'Tennis', descriptionSport: 'The right',dateFondation: new Date("11/02/2000"), genre :{idGen:1,nomGen:"collectif"}}
  //   ];

  //  }


  //  listSport():sport[]{
  //   return this.sports;
  //  }

  //  ajouterSport(sp: sport){
  //   this.sports.push(sp);
  //  }

  //  supprimerSport(sp:sport){
  //   const index = this.sports.indexOf(sp,0)
  //   if(index > -1){
  //     this.sports.splice(index,1);
  //   }
  //  }

  //  consulterSport(id:number):sport{
  //   this.spo = this.sports.find(sp => sp.idSport == id)!;
  //     return this.spo;
  //  }

  //  trierSport(){
  //   this.sports = this.sports.sort((n1,n2) => { 
  //     if (n1.idSport! > n2.idSport!) { 
  //         return 1; 
  //     } 
  //    if (n1.idSport! < n2.idSport!) { 
  //         return -1; 
  //     } 
  //   return 0; 
  // }); 
  //  }

  //  updateSport(p:sport){
  //   this.supprimerSport(p);
  //   this.ajouterSport(p);
  //   this.trierSport();
  //  }



  // listeGenre(): Genre[]{
  //   return this.genres;
  // }

  // consulterGenre(id:number):Genre{
  //   return this.genres.find(gen => gen.idGen == id)!;
  // }

}
