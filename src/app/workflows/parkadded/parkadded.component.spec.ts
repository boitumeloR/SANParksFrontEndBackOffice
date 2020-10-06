import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkaddedComponent } from './parkadded.component';

describe('ParkaddedComponent', () => {
  let component: ParkaddedComponent;
  let fixture: ComponentFixture<ParkaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
