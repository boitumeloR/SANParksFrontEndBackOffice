import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParkComponent } from './delete-park.component';

describe('DeleteParkComponent', () => {
  let component: DeleteParkComponent;
  let fixture: ComponentFixture<DeleteParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
