import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardCategoryUnsuccessfulComponent } from './update-wildcard-category-unsuccessful.component';

describe('UpdateWildcardCategoryUnsuccessfulComponent', () => {
  let component: UpdateWildcardCategoryUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateWildcardCategoryUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardCategoryUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardCategoryUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
