import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFirestoreModule } from 'angularfire2/firestore';
import { ClientsComponent } from './components/clients/clients.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { ShowClientsComponent } from './components/show-clients/show-clients.component';
import { CreatClientsComponent } from './components/creat-clients/creat-clients.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';

import { environment } from '../environments/environment.prod';
import { ClientserviceService } from './services/clientservice.service';
import { AuthService } from './services/auth.service';
import {FormsModule} from "@angular/forms";
import {FlashMessagesModule} from 'angular2-flash-messages'; 
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    EditClientsComponent,
    ShowClientsComponent,
    CreatClientsComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot() 
  ],
  providers: [ClientserviceService, AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }
