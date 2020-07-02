import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityConfirmationComponent } from './update-activity-confirmation.component';

describe('UpdateActivityConfirmationComponent', () => {
  let component: UpdateActivityConfirmationComponent;
  let fixture: ComponentFixture<UpdateActivityConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
