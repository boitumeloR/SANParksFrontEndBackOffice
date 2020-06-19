import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampTypeConfirmationComponent } from './update-camp-type-confirmation.component';

describe('UpdateCampTypeConfirmationComponent', () => {
  let component: UpdateCampTypeConfirmationComponent;
  let fixture: ComponentFixture<UpdateCampTypeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampTypeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampTypeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
