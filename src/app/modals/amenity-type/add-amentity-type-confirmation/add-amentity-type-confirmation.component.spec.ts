import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmentityTypeConfirmationComponent } from './add-amentity-type-confirmation.component';

describe('AddAmentityTypeConfirmationComponent', () => {
  let component: AddAmentityTypeConfirmationComponent;
  let fixture: ComponentFixture<AddAmentityTypeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmentityTypeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmentityTypeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
