import {SlideshowModule} from 'ng-simple-slideshow';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutPaymentConfirmationComponent } from './checkout/checkout-payment-confirmation/checkout-payment-confirmation.component';
import { CheckoutShippingConfirmationComponent } from './checkout/checkout-shipping-confirmation/checkout-shipping-confirmation.component';
import { CheckoutOrderConfirmationComponent } from './checkout/checkout-order-confirmation/checkout-order-confirmation.component';
import { LoginComponent } from './login/login.component';
import { LoginUserLogInComponent } from './login/login-user-log-in/login-user-log-in.component';
import { SignupRegisterComponent } from './login/signup-register/signup-register.component';
import { CategoriesComponent } from './categories/categories.component';

import { UserComponent } from './user-info/user/user.component';
import { OrdersComponent } from './user-info/orders/orders.component';

import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { HomepageComponent } from './homepage/homepage.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,

    UserInfoComponent,
    EditUserComponent,

    PruebaComponent,
    CheckoutComponent,
    CheckoutPaymentConfirmationComponent,
    CheckoutShippingConfirmationComponent,
    CheckoutOrderConfirmationComponent,
    LoginComponent,
    LoginUserLogInComponent,
    SignupRegisterComponent,
    
    UserComponent,
    OrdersComponent,
    
    ShoppingcartComponent,
    
    HomepageComponent,
    CategoriesComponent,

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatComponentsModule,
    BrowserAnimationsModule,
    ScrollDispatchModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
