import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportsComponent } from './sports/sports.component';
import { AddSportComponent } from './add-sport/add-sport.component';
import { FormsModule } from '@angular/forms';
import { UpdateSportComponent } from './update-sport/update-sport.component'; 
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeGenreComponent } from './liste-genre/liste-genre.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    AddSportComponent,
    UpdateSportComponent,
    RechercheParGenreComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeGenreComponent,
    UpdateGenreComponent,
    LoginComponent,
    ForbiddenComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
