import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkUnsuccessfulComponent } from './add-park-unsuccessful.component';

describe('AddParkUnsuccessfulComponent', () => {
  let component: AddParkUnsuccessfulComponent;
  let fixture: ComponentFixture<AddParkUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
