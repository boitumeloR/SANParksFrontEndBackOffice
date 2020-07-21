import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardCategoryComponent } from './add-wildcard-category.component';

describe('AddWildcardCategoryComponent', () => {
  let component: AddWildcardCategoryComponent;
  let fixture: ComponentFixture<AddWildcardCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
