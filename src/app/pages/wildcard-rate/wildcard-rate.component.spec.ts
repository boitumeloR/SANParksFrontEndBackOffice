import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardRateComponent } from './wildcard-rate.component';

describe('WildcardRateComponent', () => {
  let component: WildcardRateComponent;
  let fixture: ComponentFixture<WildcardRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
