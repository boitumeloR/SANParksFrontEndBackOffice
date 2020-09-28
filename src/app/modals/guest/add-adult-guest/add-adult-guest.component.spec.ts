import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdultGuestComponent } from './add-adult-guest.component';

describe('AddAdultGuestComponent', () => {
  let component: AddAdultGuestComponent;
  let fixture: ComponentFixture<AddAdultGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdultGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdultGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
