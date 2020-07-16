import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampUnsuccessfulComponent } from './delete-camp-unsuccessful.component';

describe('DeleteCampUnsuccessfulComponent', () => {
  let component: DeleteCampUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteCampUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCampUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCampUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
