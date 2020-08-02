import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewWildcardMembershipComponent } from './renew-wildcard-membership.component';

describe('RenewWildcardMembershipComponent', () => {
  let component: RenewWildcardMembershipComponent;
  let fixture: ComponentFixture<RenewWildcardMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewWildcardMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewWildcardMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
