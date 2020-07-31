import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignAccComponent } from './unassign-acc.component';

describe('UnassignAccComponent', () => {
  let component: UnassignAccComponent;
  let fixture: ComponentFixture<UnassignAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnassignAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
