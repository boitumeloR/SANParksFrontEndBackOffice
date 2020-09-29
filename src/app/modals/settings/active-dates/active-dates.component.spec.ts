import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDatesComponent } from './active-dates.component';

describe('ActiveDatesComponent', () => {
  let component: ActiveDatesComponent;
  let fixture: ComponentFixture<ActiveDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
