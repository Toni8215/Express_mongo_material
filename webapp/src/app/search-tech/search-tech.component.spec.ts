import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTechComponent } from './search-tech.component';

describe('SearchTechComponent', () => {
  let component: SearchTechComponent;
  let fixture: ComponentFixture<SearchTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
