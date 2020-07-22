import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParkGateTimeComponent } from './delete-park-gate-time.component';

describe('DeleteParkGateTimeComponent', () => {
  let component: DeleteParkGateTimeComponent;
  let fixture: ComponentFixture<DeleteParkGateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParkGateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParkGateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
