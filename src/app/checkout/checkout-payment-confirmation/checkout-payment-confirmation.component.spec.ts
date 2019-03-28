import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPaymentConfirmationComponent } from './checkout-payment-confirmation.component';

describe('CheckoutPaymentConfirmationComponent', () => {
  let component: CheckoutPaymentConfirmationComponent;
  let fixture: ComponentFixture<CheckoutPaymentConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutPaymentConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPaymentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
