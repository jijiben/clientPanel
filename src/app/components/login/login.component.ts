import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  

  constructor(public router: Router,public flashMessage: FlashMessagesService,public authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(res => {
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.flashMessage.show(err.messag, {
          cssClass: 'alert-danger', timeout: 4000

        });
      });
  }

}