import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDayvisitComponent } from './add-dayvisit.component';

describe('AddDayvisitComponent', () => {
  let component: AddDayvisitComponent;
  let fixture: ComponentFixture<AddDayvisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDayvisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDayvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
