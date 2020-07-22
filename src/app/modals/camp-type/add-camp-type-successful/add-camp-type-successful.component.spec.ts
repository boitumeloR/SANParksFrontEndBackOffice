import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampTypeSuccessfulComponent } from './add-camp-type-successful.component';

describe('AddCampTypeSuccessfulComponent', () => {
  let component: AddCampTypeSuccessfulComponent;
  let fixture: ComponentFixture<AddCampTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
