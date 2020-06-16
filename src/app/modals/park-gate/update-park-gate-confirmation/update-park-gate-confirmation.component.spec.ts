import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkGateConfirmationComponent } from './update-park-gate-confirmation.component';

describe('UpdateParkGateConfirmationComponent', () => {
  let component: UpdateParkGateConfirmationComponent;
  let fixture: ComponentFixture<UpdateParkGateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkGateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkGateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
