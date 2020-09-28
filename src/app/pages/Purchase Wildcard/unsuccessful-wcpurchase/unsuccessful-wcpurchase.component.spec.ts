import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsuccessfulWCPurchaseComponent } from './unsuccessful-wcpurchase.component';

describe('UnsuccessfulWCPurchaseComponent', () => {
  let component: UnsuccessfulWCPurchaseComponent;
  let fixture: ComponentFixture<UnsuccessfulWCPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsuccessfulWCPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsuccessfulWCPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
