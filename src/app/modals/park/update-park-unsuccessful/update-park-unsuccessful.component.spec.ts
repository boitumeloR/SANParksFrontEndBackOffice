import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkUnsuccessfulComponent } from './update-park-unsuccessful.component';

describe('UpdateParkUnsuccessfulComponent', () => {
  let component: UpdateParkUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateParkUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
