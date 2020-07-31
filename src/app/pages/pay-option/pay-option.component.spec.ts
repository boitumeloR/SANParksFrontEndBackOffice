import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOptionComponent } from './pay-option.component';

describe('PayOptionComponent', () => {
  let component: PayOptionComponent;
  let fixture: ComponentFixture<PayOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
