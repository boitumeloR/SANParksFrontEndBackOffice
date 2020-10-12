import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsuccessfulProfileUpdateComponent } from './unsuccessful-profile-update.component';

describe('UnsuccessfulProfileUpdateComponent', () => {
  let component: UnsuccessfulProfileUpdateComponent;
  let fixture: ComponentFixture<UnsuccessfulProfileUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsuccessfulProfileUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsuccessfulProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
