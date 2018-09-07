import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { CreatClientsComponent } from './components/creat-clients/creat-clients.component';

import { ShowClientsComponent } from './components/show-clients/show-clients.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';

const routes: Routes = [
  {path:"", redirectTo:"/clients", pathMatch:'full'},
  {path:"clients", component:ClientsComponent},
  {path:"client/creat", component:CreatClientsComponent},
  {path:"client/edit/:id", component:EditClientsComponent},
  {path:"client/show/:id", component:ShowClientsComponent},
  {path:"client/login", component:LoginComponent},
  {path:"client/register", component:RegisterComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
