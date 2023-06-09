import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchComponent } from './components/search/search.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  { 
    path: 'profile', component: ProfileComponent 
  },
  {
    path:'cart-details', component: CartDetailsComponent
  },
  {
    path:'products/:id', component: ProductDetailsComponent
  },
  {
    path:'search', component: SearchComponent
  },
  {
    path:'products', component: ProductsComponent
  },
  {
    path:'orders', component: OrderHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
