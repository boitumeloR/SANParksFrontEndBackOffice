import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampConfirmationComponent } from './update-camp-confirmation.component';

describe('UpdateCampConfirmationComponent', () => {
  let component: UpdateCampConfirmationComponent;
  let fixture: ComponentFixture<UpdateCampConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
