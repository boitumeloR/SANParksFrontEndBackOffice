import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkGateSuccessfulComponent } from './update-park-gate-successful.component';

describe('UpdateParkGateSuccessfulComponent', () => {
  let component: UpdateParkGateSuccessfulComponent;
  let fixture: ComponentFixture<UpdateParkGateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkGateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkGateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
