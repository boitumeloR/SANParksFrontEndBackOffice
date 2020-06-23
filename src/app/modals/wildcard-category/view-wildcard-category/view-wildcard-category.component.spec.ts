import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWildcardCategoryComponent } from './view-wildcard-category.component';

describe('ViewWildcardCategoryComponent', () => {
  let component: ViewWildcardCategoryComponent;
  let fixture: ComponentFixture<ViewWildcardCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWildcardCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWildcardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
