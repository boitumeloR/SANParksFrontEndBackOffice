import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParkGateUnsuccessfulComponent } from './delete-park-gate-unsuccessful.component';

describe('DeleteParkGateUnsuccessfulComponent', () => {
  let component: DeleteParkGateUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteParkGateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParkGateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParkGateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
