import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkSuccessfulComponent } from './update-park-successful.component';

describe('UpdateParkSuccessfulComponent', () => {
  let component: UpdateParkSuccessfulComponent;
  let fixture: ComponentFixture<UpdateParkSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
