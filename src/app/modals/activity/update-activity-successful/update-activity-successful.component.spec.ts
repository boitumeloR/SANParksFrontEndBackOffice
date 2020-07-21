import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivitySuccessfulComponent } from './update-activity-successful.component';

describe('UpdateActivitySuccessfulComponent', () => {
  let component: UpdateActivitySuccessfulComponent;
  let fixture: ComponentFixture<UpdateActivitySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivitySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivitySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
