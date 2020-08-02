import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientConfirmationComponent } from './add-client-confirmation.component';

describe('AddClientConfirmationComponent', () => {
  let component: AddClientConfirmationComponent;
  let fixture: ComponentFixture<AddClientConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
