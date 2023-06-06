import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//component
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddcoashComponent } from './addcoash/addcoash.component';
import { CoashComponent } from './coash/coash.component';
import { ListcontactComponent } from './listcontact/listcontact.component';
import { MenuComponent } from './menu/menu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListClientComponent } from './list-client/list-client.component';
import { NewsComponent } from './news/news.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AjouterReservationComponent } from './ajouter-reservation/ajouter-reservation.component';



@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    AddcoashComponent,
    CoashComponent,
    ListcontactComponent,
    MenuComponent,
    ProfilAdminComponent,
    EditProductComponent,
    ListClientComponent,
         NewsComponent,
         AddnewsComponent,
         ListCategorieComponent,
         EditCategorieComponent,
         AddCategorieComponent,
         DashboardComponent,
         ReservationComponent,
         AjouterReservationComponent
    
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    NgxPaginationModule,
    
    

  ]
})
export class DashboardModule { }
