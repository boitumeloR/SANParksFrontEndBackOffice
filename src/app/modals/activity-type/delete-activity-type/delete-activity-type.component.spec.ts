import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityTypeComponent } from './delete-activity-type.component';

describe('DeleteActivityTypeComponent', () => {
  let component: DeleteActivityTypeComponent;
  let fixture: ComponentFixture<DeleteActivityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
