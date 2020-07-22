import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParkGateTimeUnsuccessfulComponent } from './delete-park-gate-time-unsuccessful.component';

describe('DeleteParkGateTimeUnsuccessfulComponent', () => {
  let component: DeleteParkGateTimeUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteParkGateTimeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParkGateTimeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParkGateTimeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
