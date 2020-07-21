import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWildcardClusterSuccessfulComponent } from './delete-wildcard-cluster-successful.component';

describe('DeleteWildcardClusterSuccessfulComponent', () => {
  let component: DeleteWildcardClusterSuccessfulComponent;
  let fixture: ComponentFixture<DeleteWildcardClusterSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWildcardClusterSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWildcardClusterSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
