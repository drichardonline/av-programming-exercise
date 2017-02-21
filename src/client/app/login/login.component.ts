import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


/** Lazy loaded LoginComponent */
@Component({
  moduleId: module.id,
  selector: 'av-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {

  constructor(private authService: AuthService, public router: Router) {}


  login() {
    let component = this;
    this.authService.login().subscribe(
      (response:boolean) => {
        console.log('Login Flow > isLoggedIn? ' + response);
        if (this.authService.isLoggedIn) {
          component.router.navigate(['/geolocation']);
        }
      }
    );
  }


  logout() {
    let component = this;
    this.authService.logout().subscribe(
      (response:boolean) => {
        if (!this.authService.isLoggedIn) {
          console.log('Login Flow > isLoggedIn? ' + response);
          component.router.navigate(['/login']);
        }
      }
    );
  }

}