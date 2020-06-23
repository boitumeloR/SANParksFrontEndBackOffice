import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardRateConfirmationComponent } from './update-wildcard-rate-confirmation.component';

describe('UpdateWildcardRateConfirmationComponent', () => {
  let component: UpdateWildcardRateConfirmationComponent;
  let fixture: ComponentFixture<UpdateWildcardRateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardRateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardRateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
