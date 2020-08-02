import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseWildcardConfirmationComponent } from './purchase-wildcard-confirmation.component';

describe('PurchaseWildcardConfirmationComponent', () => {
  let component: PurchaseWildcardConfirmationComponent;
  let fixture: ComponentFixture<PurchaseWildcardConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseWildcardConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseWildcardConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
