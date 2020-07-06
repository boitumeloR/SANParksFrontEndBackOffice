import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParkSuccessfulComponent } from './delete-park-successful.component';

describe('DeleteParkSuccessfulComponent', () => {
  let component: DeleteParkSuccessfulComponent;
  let fixture: ComponentFixture<DeleteParkSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParkSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParkSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
