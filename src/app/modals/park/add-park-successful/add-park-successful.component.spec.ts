import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkSuccessfulComponent } from './add-park-successful.component';

describe('AddParkSuccessfulComponent', () => {
  let component: AddParkSuccessfulComponent;
  let fixture: ComponentFixture<AddParkSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
