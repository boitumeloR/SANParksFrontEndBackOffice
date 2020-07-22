import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWildcardClusterUnsuccessfulComponent } from './delete-wildcard-cluster-unsuccessful.component';

describe('DeleteWildcardClusterUnsuccessfulComponent', () => {
  let component: DeleteWildcardClusterUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteWildcardClusterUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWildcardClusterUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWildcardClusterUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
