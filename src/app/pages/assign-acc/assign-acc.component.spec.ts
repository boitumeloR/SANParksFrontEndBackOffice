import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAccComponent } from './assign-acc.component';

describe('AssignAccComponent', () => {
  let component: AssignAccComponent;
  let fixture: ComponentFixture<AssignAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
