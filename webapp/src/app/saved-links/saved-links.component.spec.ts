import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedLinksComponent } from './saved-links.component';

describe('SavedLinksComponent', () => {
  let component: SavedLinksComponent;
  let fixture: ComponentFixture<SavedLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
