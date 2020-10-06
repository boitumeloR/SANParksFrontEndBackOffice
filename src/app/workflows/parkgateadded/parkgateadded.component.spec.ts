import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkgateaddedComponent } from './parkgateadded.component';

describe('ParkgateaddedComponent', () => {
  let component: ParkgateaddedComponent;
  let fixture: ComponentFixture<ParkgateaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkgateaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkgateaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
