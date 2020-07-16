import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampGateTimeUnsuccessfulComponent } from './delete-camp-gate-time-unsuccessful.component';

describe('DeleteCampGateTimeUnsuccessfulComponent', () => {
  let component: DeleteCampGateTimeUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteCampGateTimeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCampGateTimeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCampGateTimeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
