import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWildcardMembershipComponent } from './search-wildcard-membership.component';

describe('SearchWildcardMembershipComponent', () => {
  let component: SearchWildcardMembershipComponent;
  let fixture: ComponentFixture<SearchWildcardMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWildcardMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWildcardMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
