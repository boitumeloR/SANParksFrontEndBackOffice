import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardRateComponent } from './update-wildcard-rate.component';

describe('UpdateWildcardRateComponent', () => {
  let component: UpdateWildcardRateComponent;
  let fixture: ComponentFixture<UpdateWildcardRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
