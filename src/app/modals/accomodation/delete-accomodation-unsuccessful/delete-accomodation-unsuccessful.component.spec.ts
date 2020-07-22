import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationUnsuccessfulComponent } from './delete-accomodation-unsuccessful.component';

describe('DeleteAccomodationUnsuccessfulComponent', () => {
  let component: DeleteAccomodationUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteAccomodationUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
