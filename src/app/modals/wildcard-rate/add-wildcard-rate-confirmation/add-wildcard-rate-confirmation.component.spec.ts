import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardRateConfirmationComponent } from './add-wildcard-rate-confirmation.component';

describe('AddWildcardRateConfirmationComponent', () => {
  let component: AddWildcardRateConfirmationComponent;
  let fixture: ComponentFixture<AddWildcardRateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardRateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardRateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
