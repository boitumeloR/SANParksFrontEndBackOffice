import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityTypeSuccessfulComponent } from './delete-activity-type-successful.component';

describe('DeleteActivityTypeSuccessfulComponent', () => {
  let component: DeleteActivityTypeSuccessfulComponent;
  let fixture: ComponentFixture<DeleteActivityTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivityTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
