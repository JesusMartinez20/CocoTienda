import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserLogInComponent } from './login-user-log-in.component';

describe('LoginUserLogInComponent', () => {
  let component: LoginUserLogInComponent;
  let fixture: ComponentFixture<LoginUserLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUserLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
