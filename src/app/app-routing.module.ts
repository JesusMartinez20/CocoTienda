import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'user-edit', component: EditUserComponent},
  { path: 'cart', component: ShoppingcartComponent },
  { path: 'categories/:id', component: CategoriesComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ProductComponent },
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
