import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeasonUnsuccessfulComponent } from './update-season-unsuccessful.component';

describe('UpdateSeasonUnsuccessfulComponent', () => {
  let component: UpdateSeasonUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateSeasonUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSeasonUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSeasonUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
