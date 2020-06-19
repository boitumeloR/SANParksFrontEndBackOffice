import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampTypeComponent } from './delete-camp-type.component';

describe('DeleteCampTypeComponent', () => {
  let component: DeleteCampTypeComponent;
  let fixture: ComponentFixture<DeleteCampTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCampTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCampTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
