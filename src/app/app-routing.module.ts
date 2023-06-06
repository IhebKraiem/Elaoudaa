import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InscritComponent } from './components/inscrit/inscrit.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './components/shop/shop.component';
import { CoashComponent } from './components/coash/coash.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RequestResetComponent } from './components/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/response-reset/response-reset.component';
import { ClientGuard } from './services/client.guard';





const routes: Routes = [

  {path:'navbar', component:NavbarComponent,canActivate : [ClientGuard]},
  {path:'footer', component:FooterComponent,canActivate : [ClientGuard]},
  {path:'login', component:LoginComponent},
  {path:'inscrit', component:InscritComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'shop/:id', component:ShopComponent},
  {path:'shop', component:ShopComponent},
  {path:'coach', component:CoashComponent},
  {path:'cart', component:CartComponent,canActivate : [ClientGuard]},
  {path:'profile', component:ProfileComponent,canActivate : [ClientGuard]},
  {path:'detail-Produit/:id', component:DetailProduitComponent},
  {path:'reservation', component:ReservationComponent,canActivate : [ClientGuard]},
  {path: 'request-reset-password',component: RequestResetComponent},
  {path: 'response-reset-password/:token',component: ResponseResetComponent} ,
  
  
  

  {path: 'admin',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
