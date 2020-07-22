import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampTypeSuccessfulComponent } from './delete-camp-type-successful.component';

describe('DeleteCampTypeSuccessfulComponent', () => {
  let component: DeleteCampTypeSuccessfulComponent;
  let fixture: ComponentFixture<DeleteCampTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCampTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCampTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
