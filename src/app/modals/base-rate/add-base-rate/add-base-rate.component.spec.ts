import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaseRateComponent } from './add-base-rate.component';

describe('AddBaseRateComponent', () => {
  let component: AddBaseRateComponent;
  let fixture: ComponentFixture<AddBaseRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBaseRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBaseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
