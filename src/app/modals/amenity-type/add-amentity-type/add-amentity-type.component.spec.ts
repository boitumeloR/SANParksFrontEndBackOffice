import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmentityTypeComponent } from './add-amentity-type.component';

describe('AddAmentityTypeComponent', () => {
  let component: AddAmentityTypeComponent;
  let fixture: ComponentFixture<AddAmentityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmentityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmentityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
