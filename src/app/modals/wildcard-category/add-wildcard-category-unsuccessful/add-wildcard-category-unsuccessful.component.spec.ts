import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardCategoryUnsuccessfulComponent } from './add-wildcard-category-unsuccessful.component';

describe('AddWildcardCategoryUnsuccessfulComponent', () => {
  let component: AddWildcardCategoryUnsuccessfulComponent;
  let fixture: ComponentFixture<AddWildcardCategoryUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardCategoryUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardCategoryUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
