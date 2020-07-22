import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationAddRateUnsuccessfulComponent } from './delete-accomodation-add-rate-unsuccessful.component';

describe('DeleteAccomodationAddRateUnsuccessfulComponent', () => {
  let component: DeleteAccomodationAddRateUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteAccomodationAddRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationAddRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationAddRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
