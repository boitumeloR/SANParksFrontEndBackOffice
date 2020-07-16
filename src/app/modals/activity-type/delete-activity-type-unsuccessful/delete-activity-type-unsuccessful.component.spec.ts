import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityTypeUnsuccessfulComponent } from './delete-activity-type-unsuccessful.component';

describe('DeleteActivityTypeUnsuccessfulComponent', () => {
  let component: DeleteActivityTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteActivityTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivityTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
