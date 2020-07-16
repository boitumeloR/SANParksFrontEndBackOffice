import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampTypeUnsuccessfulComponent } from './delete-camp-type-unsuccessful.component';

describe('DeleteCampTypeUnsuccessfulComponent', () => {
  let component: DeleteCampTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteCampTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCampTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCampTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
