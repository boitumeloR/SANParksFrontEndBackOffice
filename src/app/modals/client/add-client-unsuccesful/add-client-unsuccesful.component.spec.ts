import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientUnsuccesfulComponent } from './add-client-unsuccesful.component';

describe('AddClientUnsuccesfulComponent', () => {
  let component: AddClientUnsuccesfulComponent;
  let fixture: ComponentFixture<AddClientUnsuccesfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientUnsuccesfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientUnsuccesfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
