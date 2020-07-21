import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampTypeUnsuccessfulComponent } from './update-camp-type-unsuccessful.component';

describe('UpdateCampTypeUnsuccessfulComponent', () => {
  let component: UpdateCampTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateCampTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
