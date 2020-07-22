import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampSuccessfulComponent } from './update-camp-successful.component';

describe('UpdateCampSuccessfulComponent', () => {
  let component: UpdateCampSuccessfulComponent;
  let fixture: ComponentFixture<UpdateCampSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
