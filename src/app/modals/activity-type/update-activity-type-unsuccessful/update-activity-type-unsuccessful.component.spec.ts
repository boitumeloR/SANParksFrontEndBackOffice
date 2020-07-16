import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityTypeUnsuccessfulComponent } from './update-activity-type-unsuccessful.component';

describe('UpdateActivityTypeUnsuccessfulComponent', () => {
  let component: UpdateActivityTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateActivityTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
