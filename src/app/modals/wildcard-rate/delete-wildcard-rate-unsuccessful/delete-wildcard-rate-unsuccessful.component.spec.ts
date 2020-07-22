import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWildcardRateUnsuccessfulComponent } from './delete-wildcard-rate-unsuccessful.component';

describe('DeleteWildcardRateUnsuccessfulComponent', () => {
  let component: DeleteWildcardRateUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteWildcardRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWildcardRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWildcardRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
