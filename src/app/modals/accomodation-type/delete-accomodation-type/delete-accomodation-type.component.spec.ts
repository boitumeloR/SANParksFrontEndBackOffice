import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationTypeComponent } from './delete-accomodation-type.component';

describe('DeleteAccomodationTypeComponent', () => {
  let component: DeleteAccomodationTypeComponent;
  let fixture: ComponentFixture<DeleteAccomodationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
