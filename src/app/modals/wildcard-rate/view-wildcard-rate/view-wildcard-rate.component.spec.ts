import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWildcardRateComponent } from './view-wildcard-rate.component';

describe('ViewWildcardRateComponent', () => {
  let component: ViewWildcardRateComponent;
  let fixture: ComponentFixture<ViewWildcardRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWildcardRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWildcardRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
