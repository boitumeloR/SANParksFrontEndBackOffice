import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWildcardClusterComponent } from './view-wildcard-cluster.component';

describe('ViewWildcardClusterComponent', () => {
  let component: ViewWildcardClusterComponent;
  let fixture: ComponentFixture<ViewWildcardClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWildcardClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWildcardClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
