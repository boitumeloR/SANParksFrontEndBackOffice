import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParkGateComponent } from './delete-park-gate.component';

describe('DeleteParkGateComponent', () => {
  let component: DeleteParkGateComponent;
  let fixture: ComponentFixture<DeleteParkGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParkGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParkGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
