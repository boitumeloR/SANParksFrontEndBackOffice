import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseWildcardComponent } from './purchase-wildcard.component';

describe('PurchaseWildcardComponent', () => {
  let component: PurchaseWildcardComponent;
  let fixture: ComponentFixture<PurchaseWildcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseWildcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseWildcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
