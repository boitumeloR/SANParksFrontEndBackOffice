import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardRateComponent } from './add-wildcard-rate.component';

describe('AddWildcardRateComponent', () => {
  let component: AddWildcardRateComponent;
  let fixture: ComponentFixture<AddWildcardRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
