import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  loggedUser: String;
  constructor(public router: Router, public authService: AuthService, public flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth  => {
      if (auth) {
        this.isLoggedIn  =  true;
      } else  {
        this.isLoggedIn  =  false;
      }
    })
  }
  onLogoutClick() {
    
    this.authService.logout();
    this.flashMessage.show('you are logged out', {
      cssClass:  'alert-success', timeout:  4000
    });
    this.router.navigate(['/login']);
  }
  onLoginClick() {

    this.router.navigate['/client/login'];
  }
}
