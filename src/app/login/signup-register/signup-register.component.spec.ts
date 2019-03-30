import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRegisterComponent } from './signup-register.component';

describe('SignupRegisterComponent', () => {
  let component: SignupRegisterComponent;
  let fixture: ComponentFixture<SignupRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
