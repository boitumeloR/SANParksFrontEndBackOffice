import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRatesComponent } from './base-rates.component';

describe('BaseRatesComponent', () => {
  let component: BaseRatesComponent;
  let fixture: ComponentFixture<BaseRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
