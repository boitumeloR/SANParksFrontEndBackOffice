import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelteSeasonSuccessfulComponent } from './delte-season-successful.component';

describe('DelteSeasonSuccessfulComponent', () => {
  let component: DelteSeasonSuccessfulComponent;
  let fixture: ComponentFixture<DelteSeasonSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelteSeasonSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelteSeasonSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
