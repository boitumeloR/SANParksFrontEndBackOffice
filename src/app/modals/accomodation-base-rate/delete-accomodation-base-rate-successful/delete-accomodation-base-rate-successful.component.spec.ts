import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationBaseRateSuccessfulComponent } from './delete-accomodation-base-rate-successful.component';

describe('DeleteAccomodationBaseRateSuccessfulComponent', () => {
  let component: DeleteAccomodationBaseRateSuccessfulComponent;
  let fixture: ComponentFixture<DeleteAccomodationBaseRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationBaseRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationBaseRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
