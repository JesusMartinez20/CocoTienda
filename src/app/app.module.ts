import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutPaymentConfirmationComponent } from './checkout/checkout-payment-confirmation/checkout-payment-confirmation.component';
import { CheckoutShippingConfirmationComponent } from './checkout/checkout-shipping-confirmation/checkout-shipping-confirmation.component';
import { CheckoutOrderConfirmationComponent } from './checkout/checkout-order-confirmation/checkout-order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    PruebaComponent,
    CheckoutComponent,
    CheckoutPaymentConfirmationComponent,
    CheckoutShippingConfirmationComponent,
    CheckoutOrderConfirmationComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatComponentsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
