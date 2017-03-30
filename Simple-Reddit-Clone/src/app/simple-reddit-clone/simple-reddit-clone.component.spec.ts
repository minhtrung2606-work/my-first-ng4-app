import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRedditCloneComponent } from './simple-reddit-clone.component';

describe('SimpleRedditCloneComponent', () => {
  let component: SimpleRedditCloneComponent;
  let fixture: ComponentFixture<SimpleRedditCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRedditCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRedditCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
