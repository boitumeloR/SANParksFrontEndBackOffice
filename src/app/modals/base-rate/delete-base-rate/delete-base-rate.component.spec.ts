import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBaseRateComponent } from './delete-base-rate.component';

describe('DeleteBaseRateComponent', () => {
  let component: DeleteBaseRateComponent;
  let fixture: ComponentFixture<DeleteBaseRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBaseRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBaseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
