import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardClusterConfirmationComponent } from './add-wildcard-cluster-confirmation.component';

describe('AddWildcardClusterConfirmationComponent', () => {
  let component: AddWildcardClusterConfirmationComponent;
  let fixture: ComponentFixture<AddWildcardClusterConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardClusterConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardClusterConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
