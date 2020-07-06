import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampTypeSuccessfulComponent } from './update-camp-type-successful.component';

describe('UpdateCampTypeSuccessfulComponent', () => {
  let component: UpdateCampTypeSuccessfulComponent;
  let fixture: ComponentFixture<UpdateCampTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
