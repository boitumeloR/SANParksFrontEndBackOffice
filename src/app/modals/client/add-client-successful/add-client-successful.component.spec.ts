import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientSuccessfulComponent } from './add-client-successful.component';

describe('AddClientSuccessfulComponent', () => {
  let component: AddClientSuccessfulComponent;
  let fixture: ComponentFixture<AddClientSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
