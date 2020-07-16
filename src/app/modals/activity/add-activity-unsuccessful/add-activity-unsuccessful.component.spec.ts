import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityUnsuccessfulComponent } from './add-activity-unsuccessful.component';

describe('AddActivityUnsuccessfulComponent', () => {
  let component: AddActivityUnsuccessfulComponent;
  let fixture: ComponentFixture<AddActivityUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
