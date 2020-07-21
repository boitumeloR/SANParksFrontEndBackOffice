import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeasonConfirmationComponent } from './update-season-confirmation.component';

describe('UpdateSeasonConfirmationComponent', () => {
  let component: UpdateSeasonConfirmationComponent;
  let fixture: ComponentFixture<UpdateSeasonConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSeasonConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSeasonConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
