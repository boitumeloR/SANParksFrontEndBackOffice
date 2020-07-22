import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampSuccessfulComponent } from './add-camp-successful.component';

describe('AddCampSuccessfulComponent', () => {
  let component: AddCampSuccessfulComponent;
  let fixture: ComponentFixture<AddCampSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
