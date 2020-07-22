import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityUnsuccessfulComponent } from './delete-activity-unsuccessful.component';

describe('DeleteActivityUnsuccessfulComponent', () => {
  let component: DeleteActivityUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteActivityUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivityUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
