import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCrudComponent } from './cat-crud.component';

describe('CatCrudComponent', () => {
  let component: CatCrudComponent;
  let fixture: ComponentFixture<CatCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
