import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProductFormComponent } from './complete-product-form.component';

describe('CompleteProductFormComponent', () => {
  let component: CompleteProductFormComponent;
  let fixture: ComponentFixture<CompleteProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
