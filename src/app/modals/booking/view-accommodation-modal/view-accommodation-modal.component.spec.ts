import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccommodationModalComponent } from './view-accommodation-modal.component';

describe('ViewAccommodationModalComponent', () => {
  let component: ViewAccommodationModalComponent;
  let fixture: ComponentFixture<ViewAccommodationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccommodationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccommodationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
