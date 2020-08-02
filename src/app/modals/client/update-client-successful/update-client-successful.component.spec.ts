import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientSuccessfulComponent } from './update-client-successful.component';

describe('UpdateClientSuccessfulComponent', () => {
  let component: UpdateClientSuccessfulComponent;
  let fixture: ComponentFixture<UpdateClientSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
