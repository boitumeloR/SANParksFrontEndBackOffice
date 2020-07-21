import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampTypeComponent } from './view-camp-type.component';

describe('ViewCampTypeComponent', () => {
  let component: ViewCampTypeComponent;
  let fixture: ComponentFixture<ViewCampTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCampTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCampTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
