import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampTypeConfirmationComponent } from './add-camp-type-confirmation.component';

describe('AddCampTypeConfirmationComponent', () => {
  let component: AddCampTypeConfirmationComponent;
  let fixture: ComponentFixture<AddCampTypeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampTypeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampTypeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
