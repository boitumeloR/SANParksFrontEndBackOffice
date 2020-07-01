import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAmentityTypeConfirmationComponent } from './view-amentity-type-confirmation.component';

describe('ViewAmentityTypeConfirmationComponent', () => {
  let component: ViewAmentityTypeConfirmationComponent;
  let fixture: ComponentFixture<ViewAmentityTypeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAmentityTypeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAmentityTypeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
