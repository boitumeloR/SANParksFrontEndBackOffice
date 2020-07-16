import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampUnsuccessfulComponent } from './add-camp-unsuccessful.component';

describe('AddCampUnsuccessfulComponent', () => {
  let component: AddCampUnsuccessfulComponent;
  let fixture: ComponentFixture<AddCampUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
