import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationAddRateComponent } from './delete-accomodation-add-rate.component';

describe('DeleteAccomodationAddRateComponent', () => {
  let component: DeleteAccomodationAddRateComponent;
  let fixture: ComponentFixture<DeleteAccomodationAddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationAddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationAddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
