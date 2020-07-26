import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnannouncedCheckInComponent } from './unannounced-check-in.component';

describe('UnannouncedCheckInComponent', () => {
  let component: UnannouncedCheckInComponent;
  let fixture: ComponentFixture<UnannouncedCheckInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnannouncedCheckInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnannouncedCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
