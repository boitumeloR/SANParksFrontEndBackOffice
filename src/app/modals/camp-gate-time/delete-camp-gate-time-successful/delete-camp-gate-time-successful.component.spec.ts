import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampGateTimeSuccessfulComponent } from './delete-camp-gate-time-successful.component';

describe('DeleteCampGateTimeSuccessfulComponent', () => {
  let component: DeleteCampGateTimeSuccessfulComponent;
  let fixture: ComponentFixture<DeleteCampGateTimeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCampGateTimeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCampGateTimeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
