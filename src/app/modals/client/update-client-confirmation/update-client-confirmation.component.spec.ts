import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientConfirmationComponent } from './update-client-confirmation.component';

describe('UpdateClientConfirmationComponent', () => {
  let component: UpdateClientConfirmationComponent;
  let fixture: ComponentFixture<UpdateClientConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
