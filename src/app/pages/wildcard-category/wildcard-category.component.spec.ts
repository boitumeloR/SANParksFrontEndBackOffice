import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardCategoryComponent } from './wildcard-category.component';

describe('WildcardCategoryComponent', () => {
  let component: WildcardCategoryComponent;
  let fixture: ComponentFixture<WildcardCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
