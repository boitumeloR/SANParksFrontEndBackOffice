import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAddRateComponent } from './delete-add-rate.component';

describe('DeleteAddRateComponent', () => {
  let component: DeleteAddRateComponent;
  let fixture: ComponentFixture<DeleteAddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
