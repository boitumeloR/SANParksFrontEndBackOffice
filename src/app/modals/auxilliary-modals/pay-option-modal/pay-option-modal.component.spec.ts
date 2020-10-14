import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOptionModalComponent } from './pay-option-modal.component';

describe('PayOptionModalComponent', () => {
  let component: PayOptionModalComponent;
  let fixture: ComponentFixture<PayOptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOptionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
