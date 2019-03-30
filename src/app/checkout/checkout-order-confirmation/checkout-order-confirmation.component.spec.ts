import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutOrderConfirmationComponent } from './checkout-order-confirmation.component';

describe('CheckoutOrderConfirmationComponent', () => {
  let component: CheckoutOrderConfirmationComponent;
  let fixture: ComponentFixture<CheckoutOrderConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutOrderConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutOrderConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
