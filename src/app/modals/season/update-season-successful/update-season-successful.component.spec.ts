import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeasonSuccessfulComponent } from './update-season-successful.component';

describe('UpdateSeasonSuccessfulComponent', () => {
  let component: UpdateSeasonSuccessfulComponent;
  let fixture: ComponentFixture<UpdateSeasonSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSeasonSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSeasonSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
