import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardCategorySuccessfulComponent } from './update-wildcard-category-successful.component';

describe('UpdateWildcardCategorySuccessfulComponent', () => {
  let component: UpdateWildcardCategorySuccessfulComponent;
  let fixture: ComponentFixture<UpdateWildcardCategorySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardCategorySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardCategorySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
