import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardCategoryConfirmationComponent } from './update-wildcard-category-confirmation.component';

describe('UpdateWildcardCategoryConfirmationComponent', () => {
  let component: UpdateWildcardCategoryConfirmationComponent;
  let fixture: ComponentFixture<UpdateWildcardCategoryConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardCategoryConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardCategoryConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
