import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardClusterSuccessfulComponent } from './update-wildcard-cluster-successful.component';

describe('UpdateWildcardClusterSuccessfulComponent', () => {
  let component: UpdateWildcardClusterSuccessfulComponent;
  let fixture: ComponentFixture<UpdateWildcardClusterSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardClusterSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardClusterSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
