import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardRateUnsuccessfulComponent } from './add-wildcard-rate-unsuccessful.component';

describe('AddWildcardRateUnsuccessfulComponent', () => {
  let component: AddWildcardRateUnsuccessfulComponent;
  let fixture: ComponentFixture<AddWildcardRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
