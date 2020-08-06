import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardReportComponent } from './wildcard-report.component';

describe('WildcardReportComponent', () => {
  let component: WildcardReportComponent;
  let fixture: ComponentFixture<WildcardReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
