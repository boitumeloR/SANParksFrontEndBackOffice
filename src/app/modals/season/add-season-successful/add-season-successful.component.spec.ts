import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeasonSuccessfulComponent } from './add-season-successful.component';

describe('AddSeasonSuccessfulComponent', () => {
  let component: AddSeasonSuccessfulComponent;
  let fixture: ComponentFixture<AddSeasonSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSeasonSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeasonSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
