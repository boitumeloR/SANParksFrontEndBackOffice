import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardRateUnsuccessfulComponent } from './update-wildcard-rate-unsuccessful.component';

describe('UpdateWildcardRateUnsuccessfulComponent', () => {
  let component: UpdateWildcardRateUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateWildcardRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
