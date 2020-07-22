import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccomodationComponent } from './delete-accomodation.component';

describe('DeleteAccomodationComponent', () => {
  let component: DeleteAccomodationComponent;
  let fixture: ComponentFixture<DeleteAccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
