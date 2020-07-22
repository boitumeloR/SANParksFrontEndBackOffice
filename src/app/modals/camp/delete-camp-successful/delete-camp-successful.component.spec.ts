import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampSuccessfulComponent } from './delete-camp-successful.component';

describe('DeleteCampSuccessfulComponent', () => {
  let component: DeleteCampSuccessfulComponent;
  let fixture: ComponentFixture<DeleteCampSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCampSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCampSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
