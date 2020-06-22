import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardClusterConfirmationComponent } from './update-wildcard-cluster-confirmation.component';

describe('UpdateWildcardClusterConfirmationComponent', () => {
  let component: UpdateWildcardClusterConfirmationComponent;
  let fixture: ComponentFixture<UpdateWildcardClusterConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardClusterConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardClusterConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
