import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClientForWCComponent } from './search-client-for-wc.component';

describe('SearchClientForWCComponent', () => {
  let component: SearchClientForWCComponent;
  let fixture: ComponentFixture<SearchClientForWCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchClientForWCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClientForWCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
