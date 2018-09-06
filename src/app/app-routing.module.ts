import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ShowClientComponent } from './components/show-client/show-client.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "", redirectTo: "/clients", pathMatch: 'full'},
  {path: "clients", component: ClientsComponent},
  {path: "client/create", component: CreateClientComponent},
  {path: "client/edit/:id", component: EditClientComponent},
  {path: "client/show/:id", component: ShowClientComponent},
  {path: "login", component:LoginComponent },
  {path: "register", component: RegisterComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
