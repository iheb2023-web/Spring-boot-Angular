import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { AddSportComponent } from './add-sport/add-sport.component';
import { UpdateSportComponent } from './update-sport/update-sport.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeGenreComponent } from './liste-genre/liste-genre.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { sportGuard } from './sport.guard';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

const routes: Routes = [
  {path: "sports", component: SportsComponent},
  {path: "add-sport", component:AddSportComponent, canActivate:[sportGuard]},
  {path: "updateSport/:id", component: UpdateSportComponent},
  {path: "rechercheParGenre", component : RechercheParGenreComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeGenres", component: ListeGenreComponent},
  {path:"register", component: RegisterComponent},
  {path:"",redirectTo:"sports",pathMatch:"full"},
  {path:  'app-forbidden', component: ForbiddenComponent}, 
  {path:  'login', component: LoginComponent},
  { path: 'verifEmail', component: VerifEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
