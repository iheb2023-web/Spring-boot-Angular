import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User.model'; 
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  erreur: number= 0;

  user = new User();

  err:number = 0;

  message : string = "login ou mot de passe erronés.."; 


  constructor(private authService : AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin()
    
      {
        this.authService.login(this.user).subscribe({
        next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
        },
        error: (err) => { 
          this.err = 1;  
          if (err.error.errorCause=='disabled') 
          this.message="Utilisateur désactivé, Veuillez contacter votre Administrateur"; 
          }

        });
        
    }

  /*onLoggedin()
    {
      console.log(this.user);
      let isValidUser: Boolean = this.authService.SignIn(this.user);
      if (isValidUser)
          this.router.navigate(['/']);
      else
         //   alert('Login ou mot de passe incorrecte!');
         this.erreur=1;

    }*/



  }