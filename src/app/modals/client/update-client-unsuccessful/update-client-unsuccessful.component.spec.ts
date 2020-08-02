import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientUnsuccessfulComponent } from './update-client-unsuccessful.component';

describe('UpdateClientUnsuccessfulComponent', () => {
  let component: UpdateClientUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateClientUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
