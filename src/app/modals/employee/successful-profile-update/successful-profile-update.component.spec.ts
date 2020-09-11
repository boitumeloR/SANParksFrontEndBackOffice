import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulProfileUpdateComponent } from './successful-profile-update.component';

describe('SuccessfulProfileUpdateComponent', () => {
  let component: SuccessfulProfileUpdateComponent;
  let fixture: ComponentFixture<SuccessfulProfileUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulProfileUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
