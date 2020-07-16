import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeasonUnsuccessfulComponent } from './add-season-unsuccessful.component';

describe('AddSeasonUnsuccessfulComponent', () => {
  let component: AddSeasonUnsuccessfulComponent;
  let fixture: ComponentFixture<AddSeasonUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSeasonUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeasonUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
