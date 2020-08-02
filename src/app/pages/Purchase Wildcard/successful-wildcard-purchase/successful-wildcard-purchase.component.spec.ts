import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulWildcardPurchaseComponent } from './successful-wildcard-purchase.component';

describe('SuccessfulWildcardPurchaseComponent', () => {
  let component: SuccessfulWildcardPurchaseComponent;
  let fixture: ComponentFixture<SuccessfulWildcardPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulWildcardPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulWildcardPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
