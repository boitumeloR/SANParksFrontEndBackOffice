import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamptypeaddedComponent } from './camptypeadded.component';

describe('CamptypeaddedComponent', () => {
  let component: CamptypeaddedComponent;
  let fixture: ComponentFixture<CamptypeaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamptypeaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamptypeaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
