import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWildcardCategorySuccessfulComponent } from './delete-wildcard-category-successful.component';

describe('DeleteWildcardCategorySuccessfulComponent', () => {
  let component: DeleteWildcardCategorySuccessfulComponent;
  let fixture: ComponentFixture<DeleteWildcardCategorySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWildcardCategorySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWildcardCategorySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
