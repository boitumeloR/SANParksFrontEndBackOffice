import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivitySuccessfulComponent } from './add-activity-successful.component';

describe('AddActivitySuccessfulComponent', () => {
  let component: AddActivitySuccessfulComponent;
  let fixture: ComponentFixture<AddActivitySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivitySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivitySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
