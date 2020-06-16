import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddRateComponent } from './add-add-rate.component';

describe('AddAddRateComponent', () => {
  let component: AddAddRateComponent;
  let fixture: ComponentFixture<AddAddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
