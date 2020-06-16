import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkConfirmationComponent } from './add-park-confirmation.component';

describe('AddParkConfirmationComponent', () => {
  let component: AddParkConfirmationComponent;
  let fixture: ComponentFixture<AddParkConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
