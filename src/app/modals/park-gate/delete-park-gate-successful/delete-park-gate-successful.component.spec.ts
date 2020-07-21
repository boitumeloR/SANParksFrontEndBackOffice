import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParkGateSuccessfulComponent } from './delete-park-gate-successful.component';

describe('DeleteParkGateSuccessfulComponent', () => {
  let component: DeleteParkGateSuccessfulComponent;
  let fixture: ComponentFixture<DeleteParkGateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParkGateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParkGateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
