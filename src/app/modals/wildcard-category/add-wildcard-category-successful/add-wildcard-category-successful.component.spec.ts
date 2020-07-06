import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardCategorySuccessfulComponent } from './add-wildcard-category-successful.component';

describe('AddWildcardCategorySuccessfulComponent', () => {
  let component: AddWildcardCategorySuccessfulComponent;
  let fixture: ComponentFixture<AddWildcardCategorySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardCategorySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardCategorySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
