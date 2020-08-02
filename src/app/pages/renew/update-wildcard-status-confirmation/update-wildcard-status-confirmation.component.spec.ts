import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardStatusConfirmationComponent } from './update-wildcard-status-confirmation.component';

describe('UpdateWildcardStatusConfirmationComponent', () => {
  let component: UpdateWildcardStatusConfirmationComponent;
  let fixture: ComponentFixture<UpdateWildcardStatusConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardStatusConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardStatusConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
