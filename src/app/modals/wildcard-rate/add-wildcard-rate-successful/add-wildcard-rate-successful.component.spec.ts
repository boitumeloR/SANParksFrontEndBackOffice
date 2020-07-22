import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardRateSuccessfulComponent } from './add-wildcard-rate-successful.component';

describe('AddWildcardRateSuccessfulComponent', () => {
  let component: AddWildcardRateSuccessfulComponent;
  let fixture: ComponentFixture<AddWildcardRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
