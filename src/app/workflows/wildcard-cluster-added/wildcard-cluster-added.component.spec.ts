import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardClusterAddedComponent } from './wildcard-cluster-added.component';

describe('WildcardClusterAddedComponent', () => {
  let component: WildcardClusterAddedComponent;
  let fixture: ComponentFixture<WildcardClusterAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardClusterAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardClusterAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
