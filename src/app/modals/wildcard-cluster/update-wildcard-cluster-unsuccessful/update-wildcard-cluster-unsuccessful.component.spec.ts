import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardClusterUnsuccessfulComponent } from './update-wildcard-cluster-unsuccessful.component';

describe('UpdateWildcardClusterUnsuccessfulComponent', () => {
  let component: UpdateWildcardClusterUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateWildcardClusterUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardClusterUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardClusterUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
