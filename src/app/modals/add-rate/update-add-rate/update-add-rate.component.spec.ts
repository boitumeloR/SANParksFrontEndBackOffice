import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddRateComponent } from './update-add-rate.component';

describe('UpdateAddRateComponent', () => {
  let component: UpdateAddRateComponent;
  let fixture: ComponentFixture<UpdateAddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
