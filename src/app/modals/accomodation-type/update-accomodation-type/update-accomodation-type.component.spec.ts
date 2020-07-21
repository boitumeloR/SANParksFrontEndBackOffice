import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationTypeComponent } from './update-accomodation-type.component';

describe('UpdateAccomodationTypeComponent', () => {
  let component: UpdateAccomodationTypeComponent;
  let fixture: ComponentFixture<UpdateAccomodationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
