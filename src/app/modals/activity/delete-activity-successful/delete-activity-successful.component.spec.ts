import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivitySuccessfulComponent } from './delete-activity-successful.component';

describe('DeleteActivitySuccessfulComponent', () => {
  let component: DeleteActivitySuccessfulComponent;
  let fixture: ComponentFixture<DeleteActivitySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivitySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivitySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
