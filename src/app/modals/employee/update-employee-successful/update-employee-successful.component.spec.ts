import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeSuccessfulComponent } from './update-employee-successful.component';

describe('UpdateEmployeeSuccessfulComponent', () => {
  let component: UpdateEmployeeSuccessfulComponent;
  let fixture: ComponentFixture<UpdateEmployeeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
