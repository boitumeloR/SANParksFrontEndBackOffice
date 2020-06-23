import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardCategoryConfirmationComponent } from './add-wildcard-category-confirmation.component';

describe('AddWildcardCategoryConfirmationComponent', () => {
  let component: AddWildcardCategoryConfirmationComponent;
  let fixture: ComponentFixture<AddWildcardCategoryConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardCategoryConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardCategoryConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
