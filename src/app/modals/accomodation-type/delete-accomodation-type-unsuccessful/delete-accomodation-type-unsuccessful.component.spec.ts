import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationTypeUnsuccessfulComponent } from './delete-accomodation-type-unsuccessful.component';

describe('DeleteAccomodationTypeUnsuccessfulComponent', () => {
  let component: DeleteAccomodationTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteAccomodationTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
