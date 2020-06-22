import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWildcardClusterComponent } from './update-wildcard-cluster.component';

describe('UpdateWildcardClusterComponent', () => {
  let component: UpdateWildcardClusterComponent;
  let fixture: ComponentFixture<UpdateWildcardClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWildcardClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWildcardClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
