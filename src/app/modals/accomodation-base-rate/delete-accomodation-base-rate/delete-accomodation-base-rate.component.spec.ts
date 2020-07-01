import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationBaseRateComponent } from './delete-accomodation-base-rate.component';

describe('DeleteAccomodationBaseRateComponent', () => {
  let component: DeleteAccomodationBaseRateComponent;
  let fixture: ComponentFixture<DeleteAccomodationBaseRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationBaseRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationBaseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
