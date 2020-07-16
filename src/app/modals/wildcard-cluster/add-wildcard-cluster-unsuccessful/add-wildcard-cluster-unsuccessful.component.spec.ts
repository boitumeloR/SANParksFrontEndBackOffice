import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardClusterUnsuccessfulComponent } from './add-wildcard-cluster-unsuccessful.component';

describe('AddWildcardClusterUnsuccessfulComponent', () => {
  let component: AddWildcardClusterUnsuccessfulComponent;
  let fixture: ComponentFixture<AddWildcardClusterUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardClusterUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardClusterUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
