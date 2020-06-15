import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParkComponent } from './view-park.component';

describe('ViewParkComponent', () => {
  let component: ViewParkComponent;
  let fixture: ComponentFixture<ViewParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
