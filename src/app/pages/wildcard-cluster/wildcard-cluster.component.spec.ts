import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardClusterComponent } from './wildcard-cluster.component';

describe('WildcardClusterComponent', () => {
  let component: WildcardClusterComponent;
  let fixture: ComponentFixture<WildcardClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
