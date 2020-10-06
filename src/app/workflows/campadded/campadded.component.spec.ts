import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaddedComponent } from './campadded.component';

describe('CampaddedComponent', () => {
  let component: CampaddedComponent;
  let fixture: ComponentFixture<CampaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
