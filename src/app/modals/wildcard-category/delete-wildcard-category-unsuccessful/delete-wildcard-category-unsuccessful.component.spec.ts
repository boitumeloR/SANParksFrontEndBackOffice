import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWildcardCategoryUnsuccessfulComponent } from './delete-wildcard-category-unsuccessful.component';

describe('DeleteWildcardCategoryUnsuccessfulComponent', () => {
  let component: DeleteWildcardCategoryUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteWildcardCategoryUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWildcardCategoryUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWildcardCategoryUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
