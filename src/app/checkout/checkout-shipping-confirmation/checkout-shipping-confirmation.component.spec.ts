import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutShippingConfirmationComponent } from './checkout-shipping-confirmation.component';

describe('CheckoutShippingConfirmationComponent', () => {
  let component: CheckoutShippingConfirmationComponent;
  let fixture: ComponentFixture<CheckoutShippingConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutShippingConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutShippingConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
