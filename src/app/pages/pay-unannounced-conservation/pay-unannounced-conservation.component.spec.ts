import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayUnannouncedConservationComponent } from './pay-unannounced-conservation.component';

describe('PayUnannouncedConservationComponent', () => {
  let component: PayUnannouncedConservationComponent;
  let fixture: ComponentFixture<PayUnannouncedConservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayUnannouncedConservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayUnannouncedConservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
