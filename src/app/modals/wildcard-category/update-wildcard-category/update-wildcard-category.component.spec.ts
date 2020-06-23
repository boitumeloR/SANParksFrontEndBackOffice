import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardCategoryComponent } from './update-wildcard-category.component';

describe('UpdateWildcardCategoryComponent', () => {
  let component: UpdateWildcardCategoryComponent;
  let fixture: ComponentFixture<UpdateWildcardCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
