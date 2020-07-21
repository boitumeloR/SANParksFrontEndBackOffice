import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampTypeUnsuccessfulComponent } from './add-camp-type-unsuccessful.component';

describe('AddCampTypeUnsuccessfulComponent', () => {
  let component: AddCampTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<AddCampTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
