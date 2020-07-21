import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationTypeSuccessfulComponent } from './delete-accomodation-type-successful.component';

describe('DeleteAccomodationTypeSuccessfulComponent', () => {
  let component: DeleteAccomodationTypeSuccessfulComponent;
  let fixture: ComponentFixture<DeleteAccomodationTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
