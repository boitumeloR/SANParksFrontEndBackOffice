import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardRateSuccessfulComponent } from './update-wildcard-rate-successful.component';

describe('UpdateWildcardRateSuccessfulComponent', () => {
  let component: UpdateWildcardRateSuccessfulComponent;
  let fixture: ComponentFixture<UpdateWildcardRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
