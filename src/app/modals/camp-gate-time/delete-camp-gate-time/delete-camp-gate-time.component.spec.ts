import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampGateTimeComponent } from './delete-camp-gate-time.component';

describe('DeleteCampGateTimeComponent', () => {
  let component: DeleteCampGateTimeComponent;
  let fixture: ComponentFixture<DeleteCampGateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCampGateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCampGateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
