import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationSuccessfulComponent } from './delete-accomodation-successful.component';

describe('DeleteAccomodationSuccessfulComponent', () => {
  let component: DeleteAccomodationSuccessfulComponent;
  let fixture: ComponentFixture<DeleteAccomodationSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
