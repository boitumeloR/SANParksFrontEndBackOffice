import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardCategoryAddedComponent } from './wildcard-category-added.component';

describe('WildcardCategoryAddedComponent', () => {
  let component: WildcardCategoryAddedComponent;
  let fixture: ComponentFixture<WildcardCategoryAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardCategoryAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardCategoryAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
