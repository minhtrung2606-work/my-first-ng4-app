import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleReditCloneComponent } from './simple-redit-clone.component';

describe('SimpleReditCloneComponent', () => {
  let component: SimpleReditCloneComponent;
  let fixture: ComponentFixture<SimpleReditCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleReditCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleReditCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
