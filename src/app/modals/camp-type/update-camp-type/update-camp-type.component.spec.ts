import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampTypeComponent } from './update-camp-type.component';

describe('UpdateCampTypeComponent', () => {
  let component: UpdateCampTypeComponent;
  let fixture: ComponentFixture<UpdateCampTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
