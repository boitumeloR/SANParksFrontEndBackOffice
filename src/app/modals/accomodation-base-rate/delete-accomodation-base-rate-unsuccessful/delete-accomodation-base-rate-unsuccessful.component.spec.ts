import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationBaseRateUnsuccessfulComponent } from './delete-accomodation-base-rate-unsuccessful.component';

describe('DeleteAccomodationBaseRateUnsuccessfulComponent', () => {
  let component: DeleteAccomodationBaseRateUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteAccomodationBaseRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationBaseRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationBaseRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
