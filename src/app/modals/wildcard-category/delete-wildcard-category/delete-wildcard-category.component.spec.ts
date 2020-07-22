import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWildcardCategoryComponent } from './delete-wildcard-category.component';

describe('DeleteWildcardCategoryComponent', () => {
  let component: DeleteWildcardCategoryComponent;
  let fixture: ComponentFixture<DeleteWildcardCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWildcardCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWildcardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
