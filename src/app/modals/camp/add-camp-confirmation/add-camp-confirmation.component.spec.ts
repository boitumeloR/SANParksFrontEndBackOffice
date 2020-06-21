import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampConfirmationComponent } from './add-camp-confirmation.component';

describe('AddCampConfirmationComponent', () => {
  let component: AddCampConfirmationComponent;
  let fixture: ComponentFixture<AddCampConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
