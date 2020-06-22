import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWildcardClusterComponent } from './delete-wildcard-cluster.component';

describe('DeleteWildcardClusterComponent', () => {
  let component: DeleteWildcardClusterComponent;
  let fixture: ComponentFixture<DeleteWildcardClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWildcardClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWildcardClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
