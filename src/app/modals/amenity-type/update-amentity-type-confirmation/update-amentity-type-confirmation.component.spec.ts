import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmentityTypeConfirmationComponent } from './update-amentity-type-confirmation.component';

describe('UpdateAmentityTypeConfirmationComponent', () => {
  let component: UpdateAmentityTypeConfirmationComponent;
  let fixture: ComponentFixture<UpdateAmentityTypeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmentityTypeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmentityTypeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
