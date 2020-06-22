import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWildcardClusterComponent } from './add-wildcard-cluster.component';

describe('AddWildcardClusterComponent', () => {
  let component: AddWildcardClusterComponent;
  let fixture: ComponentFixture<AddWildcardClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWildcardClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWildcardClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
