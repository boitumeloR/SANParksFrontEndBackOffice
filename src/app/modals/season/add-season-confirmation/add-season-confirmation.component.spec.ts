import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeasonConfirmationComponent } from './add-season-confirmation.component';

describe('AddSeasonConfirmationComponent', () => {
  let component: AddSeasonConfirmationComponent;
  let fixture: ComponentFixture<AddSeasonConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSeasonConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeasonConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
