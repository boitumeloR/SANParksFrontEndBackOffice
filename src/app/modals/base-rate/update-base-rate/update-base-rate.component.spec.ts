import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBaseRateComponent } from './update-base-rate.component';

describe('UpdateBaseRateComponent', () => {
  let component: UpdateBaseRateComponent;
  let fixture: ComponentFixture<UpdateBaseRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBaseRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBaseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
