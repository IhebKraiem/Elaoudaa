import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddcoashComponent } from './addcoash/addcoash.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { CoashComponent } from './coash/coash.component';

import { EditProductComponent } from './edit-product/edit-product.component';


import { ListcontactComponent } from './listcontact/listcontact.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { LoginGuard } from 'src/app/services/login.guard';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListClientComponent } from './list-client/list-client.component';
const routes: Routes = [{path:'products', component:ProductsComponent,canActivate : [LoginGuard]},
{path:'add-product', component:AddProductComponent,canActivate : [LoginGuard]},
{path:'dashboard', component:DashboardComponent,canActivate : [LoginGuard]},
{path:'addcoash', component:AddcoashComponent,canActivate : [LoginGuard]},
{path:'coashs', component:CoashComponent,canActivate : [LoginGuard]},
{path:'addnews', component:AddnewsComponent, canActivate : [LoginGuard]},
{path:'news', component:NewsComponent,canActivate : [LoginGuard]},
{path:'listcontact', component:ListcontactComponent,canActivate : [LoginGuard]},
{path:'update/:id', component:EditProductComponent,canActivate : [LoginGuard]},
{path:'update-news/:id', component:AddnewsComponent,canActivate : [LoginGuard]},
{path:'profil', component:ProfilAdminComponent,canActivate : [LoginGuard]},
{path:'categorie', component:ListCategorieComponent,canActivate : [LoginGuard]},
{path:'updatecategorie/:id', component:EditCategorieComponent,canActivate : [LoginGuard]},
{path:'add-categorie', component:AddCategorieComponent,canActivate : [LoginGuard]},
{path:'list_Réservation', component:ReservationComponent,canActivate : [LoginGuard]},
{path:'list-client', component:ListClientComponent,canActivate : [LoginGuard]},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
