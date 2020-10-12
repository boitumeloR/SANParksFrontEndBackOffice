import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonaddedComponent } from './seasonadded.component';

describe('SeasonaddedComponent', () => {
  let component: SeasonaddedComponent;
  let fixture: ComponentFixture<SeasonaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
