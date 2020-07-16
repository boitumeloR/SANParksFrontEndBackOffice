import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParkUnsuccessfulComponent } from './delete-park-unsuccessful.component';

describe('DeleteParkUnsuccessfulComponent', () => {
  let component: DeleteParkUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteParkUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParkUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParkUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
