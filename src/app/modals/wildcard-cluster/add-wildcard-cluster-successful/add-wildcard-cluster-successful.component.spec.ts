import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardClusterSuccessfulComponent } from './add-wildcard-cluster-successful.component';

describe('AddWildcardClusterSuccessfulComponent', () => {
  let component: AddWildcardClusterSuccessfulComponent;
  let fixture: ComponentFixture<AddWildcardClusterSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardClusterSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardClusterSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
