import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDepartmentsComponent } from './product-departments.component';

describe('ProductDepartmentsComponent', () => {
  let component: ProductDepartmentsComponent;
  let fixture: ComponentFixture<ProductDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
