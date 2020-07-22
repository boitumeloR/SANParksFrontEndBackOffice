import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSeasonUnsuccessfulComponent } from './delete-season-unsuccessful.component';

describe('DeleteSeasonUnsuccessfulComponent', () => {
  let component: DeleteSeasonUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteSeasonUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSeasonUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSeasonUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
