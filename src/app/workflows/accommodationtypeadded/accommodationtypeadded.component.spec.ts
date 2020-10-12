import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationtypeaddedComponent } from './accommodationtypeadded.component';

describe('AccommodationtypeaddedComponent', () => {
  let component: AccommodationtypeaddedComponent;
  let fixture: ComponentFixture<AccommodationtypeaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationtypeaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationtypeaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
