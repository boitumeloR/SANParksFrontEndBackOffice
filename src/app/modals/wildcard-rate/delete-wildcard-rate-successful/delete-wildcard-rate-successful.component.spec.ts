import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWildcardRateSuccessfulComponent } from './delete-wildcard-rate-successful.component';

describe('DeleteWildcardRateSuccessfulComponent', () => {
  let component: DeleteWildcardRateSuccessfulComponent;
  let fixture: ComponentFixture<DeleteWildcardRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWildcardRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWildcardRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
