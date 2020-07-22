import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWildcardRateComponent } from './delete-wildcard-rate.component';

describe('DeleteWildcardRateComponent', () => {
  let component: DeleteWildcardRateComponent;
  let fixture: ComponentFixture<DeleteWildcardRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWildcardRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWildcardRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
