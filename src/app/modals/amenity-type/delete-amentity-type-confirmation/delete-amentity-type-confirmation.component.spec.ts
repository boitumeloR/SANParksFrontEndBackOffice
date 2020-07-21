import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAmentityTypeConfirmationComponent } from './delete-amentity-type-confirmation.component';

describe('DeleteAmentityTypeConfirmationComponent', () => {
  let component: DeleteAmentityTypeConfirmationComponent;
  let fixture: ComponentFixture<DeleteAmentityTypeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAmentityTypeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAmentityTypeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
