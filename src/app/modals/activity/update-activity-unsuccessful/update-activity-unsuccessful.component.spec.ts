import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityUnsuccessfulComponent } from './update-activity-unsuccessful.component';

describe('UpdateActivityUnsuccessfulComponent', () => {
  let component: UpdateActivityUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateActivityUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
