import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampUnsuccessfulComponent } from './update-camp-unsuccessful.component';

describe('UpdateCampUnsuccessfulComponent', () => {
  let component: UpdateCampUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateCampUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
