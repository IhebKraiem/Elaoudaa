import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


//component
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { InscritComponent } from './components/inscrit/inscrit.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { CoashComponent } from './components/coash/coash.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { RequestResetComponent } from './components/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/response-reset/response-reset.component';
import { ReservationComponent } from './components/reservation/reservation.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    InscritComponent,
    FooterComponent,
    ContactComponent,
    ShopComponent,
    CoashComponent,
    HomeComponent,
 
    CartComponent,
    ProfileComponent,
    DetailProduitComponent,
    CategorieComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ReservationComponent,
   
    
 
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxPaginationModule

    
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
