import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmentityTypeComponent } from './update-amentity-type.component';

describe('UpdateAmentityTypeComponent', () => {
  let component: UpdateAmentityTypeComponent;
  let fixture: ComponentFixture<UpdateAmentityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmentityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmentityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
