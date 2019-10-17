import { TestBed } from '@angular/core/testing';

import { CornerstoneLibraryService } from './cornerstone-library.service';

describe('CornerstoneLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CornerstoneLibraryService = TestBed.get(CornerstoneLibraryService);
    expect(service).toBeTruthy();
  });
});
