import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerstoneLibraryComponent } from './cornerstone-library.component';

describe('CornerstoneLibraryComponent', () => {
  let component: CornerstoneLibraryComponent;
  let fixture: ComponentFixture<CornerstoneLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerstoneLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerstoneLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
