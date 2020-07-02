import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityTypeComponent } from './update-activity-type.component';

describe('UpdateActivityTypeComponent', () => {
  let component: UpdateActivityTypeComponent;
  let fixture: ComponentFixture<UpdateActivityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
