import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitytypeaddedComponent } from './amenitytypeadded.component';

describe('AmenitytypeaddedComponent', () => {
  let component: AmenitytypeaddedComponent;
  let fixture: ComponentFixture<AmenitytypeaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenitytypeaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenitytypeaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
