import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationAddRateSuccessfulComponent } from './delete-accomodation-add-rate-successful.component';

describe('DeleteAccomodationAddRateSuccessfulComponent', () => {
  let component: DeleteAccomodationAddRateSuccessfulComponent;
  let fixture: ComponentFixture<DeleteAccomodationAddRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationAddRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationAddRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
