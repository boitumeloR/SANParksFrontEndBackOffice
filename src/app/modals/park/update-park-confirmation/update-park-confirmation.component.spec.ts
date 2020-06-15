import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkConfirmationComponent } from './update-park-confirmation.component';

describe('UpdateParkConfirmationComponent', () => {
  let component: UpdateParkConfirmationComponent;
  let fixture: ComponentFixture<UpdateParkConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
